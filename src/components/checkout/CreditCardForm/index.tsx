import { FieldsWrapper, FieldsRow } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { RHFSelect } from '@/components/hook-form/Select'
import { Button } from '@/components/shared'
import { useCart, useCheckoutForm } from '@/contexts'
import { useDebounce } from '@/hooks'
import { CreditCardPaymentValues, Installment, PaymentMethods } from '@/models'
import { filterNumbers } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IdentificationDocumentFields } from '..'
import { schema } from './schema'
import { Container } from './styles'

type CreditCardFormProps = {
  onGetCardToken?: (cardToken: string) => void
}

type CreditCardFormValues = {
  cardExpiration: string
  cardNumber: string
  cardHolderEmail: string
  installments: number
  cardHolderName: string
  cardExpirationMonth: string
  cardExpirationYear: string
  securityCode: string
  identificationType: string
  identificationNumber: string
  paymentMethodId: string
  cardToken: string
  issuerId: number
}

export function CreditCardForm({ onGetCardToken }: CreditCardFormProps) {
  const formMethods = useForm<CreditCardFormValues>({
    resolver: yupResolver(schema)
  })
  const { watch, setValue } = formMethods
  const cardNumber = useDebounce(watch('cardNumber'), 800)
  const { updateFormValues } = useCheckoutForm()
  const { totals } = useCart()

  const [installments, setInstallments] = useState<Installment | null>(null)

  async function onSubmit(values: CreditCardFormValues) {
    const [cardExpirationMonth, cardExpirationYear] =
      values.cardExpiration.split('/')

    const cardToken = await window.mp.createCardToken({
      cardNumber: filterNumbers(values.cardNumber),
      cardholderName: values.cardHolderName,
      cardExpirationMonth,
      cardExpirationYear,
      securityCode: values.securityCode,
      identificationType: values.identificationType,
      identificationNumber: filterNumbers(values.identificationNumber)
    })

    updateFormValues('payment', {
      token: cardToken.id,
      installments: values.installments,
      payer: {
        email: values.cardHolderEmail,
        identification: {
          number: values.identificationNumber,
          type: values.identificationType
        }
      },
      issuerId: values.issuerId.toString(),
      paymentMethodId: values.paymentMethodId
    } as CreditCardPaymentValues)

    cardToken && onGetCardToken && onGetCardToken(cardToken.id)
  }

  useEffect(() => {
    setInstallments(null)

    if (!cardNumber || cardNumber?.length < 15) return

    async function fetchPaymentMethodsAndInstallments() {
      const bin = filterNumbers(cardNumber).slice(0, 6).toString()
      const paymentMethods = (await window.mp.getPaymentMethods({
        bin
      })) as PaymentMethods

      if (paymentMethods.results[0]) {
        setValue('paymentMethodId', paymentMethods.results[0].id)
        setValue('issuerId', paymentMethods.results[0].issuer.id)

        const newInstallments = await window.mp.getInstallments({
          amount: totals.total.toString(),
          locale: 'pt-BR',
          bin,
          processingMode: 'aggregator'
        })

        setInstallments(newInstallments[0])
      }
    }

    fetchPaymentMethodsAndInstallments()
  }, [cardNumber, totals.total, setValue])

  return (
    <Container>
      <RHFForm {...formMethods} onSubmit={onSubmit}>
        <FieldsWrapper>
          <FieldsRow>
            <RHFTextField
              labelStyle="static"
              label="Número do cartão"
              name="cardNumber"
              mask="9999 9999 9999 9999"
            />
            <RHFTextField
              labelStyle="static"
              label="Nome"
              name="cardHolderName"
            />
          </FieldsRow>
          <FieldsRow>
            <RHFTextField
              labelStyle="static"
              label="Expira em"
              name="cardExpiration"
              mask="99/9999"
            />
            <RHFTextField
              labelStyle="static"
              label="Código de segurança"
              name="securityCode"
              mask="9999"
            />
          </FieldsRow>
          <FieldsRow>
            <RHFSelect
              label="Parcelas"
              name="installments"
              disabled={
                !installments?.payer_costs ||
                installments.payer_costs?.length === 0
              }
              options={
                installments?.payer_costs?.map((installment) => ({
                  value: installment.installments,
                  text: installment.recommended_message
                })) || []
              }
            />
          </FieldsRow>
          <RHFTextField
            labelStyle="static"
            label="E-mail"
            name="cardHolderEmail"
          />
          <IdentificationDocumentFields />
          <Button type="submit" id="form-checkout__submit">
            Continuar
          </Button>
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
