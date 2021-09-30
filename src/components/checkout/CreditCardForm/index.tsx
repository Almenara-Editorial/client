import { FieldsWrapper, FieldsRow } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { RHFSelect } from '@/components/hook-form/Select'
import { Button } from '@/components/shared'
import { useCart } from '@/contexts'
import { IdentificationType, Installment, PaymentMethods } from '@/models'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container } from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let MercadoPago: any

type CreditCardFormProps = {
  onGetCardToken?: (cardToken: string) => void
}

type CreditCardFormValues = {
  cardExpiration: string
  cardNumber: string
  cardHolderName: string
  cardExpirationMonth: string
  cardExpirationYear: string
  securityCode: string
  identificationType: string
  identificationNumber: string
  paymentMethodId: string
  issuerId: number
}

export function CreditCardForm({ onGetCardToken }: CreditCardFormProps) {
  const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
    locale: 'pt-BR',
    advancedFraudPrevention: false
  })
  const { totals } = useCart()
  const formMethods = useForm<CreditCardFormValues>()
  const { watch, setValue } = formMethods
  const cardNumber = watch('cardNumber')

  const [identificationTypes, setIdentificationTypes] = useState<
    IdentificationType[]
  >([])

  const [installments, setInstallments] = useState<Installment | null>(null)

  async function onSubmit(values: CreditCardFormValues) {
    const [cardExpirationMonth, cardExpirationYear] =
      values.cardExpiration.split('/')

    const cardToken = await mp.createCardToken({
      cardNumber: values.cardNumber.replace(/\D/g, ''),
      cardholderName: values.cardHolderName,
      cardExpirationMonth,
      cardExpirationYear,
      securityCode: values.securityCode,
      identificationType: values.identificationType,
      identificationNumber: values.identificationNumber.replace(/\D/g, '')
    })

    console.log({ cardToken })

    cardToken && onGetCardToken && onGetCardToken(cardToken.id)
  }

  useEffect(() => {
    async function fetchResources() {
      const identificationTypesResponse = await mp.getIdentificationTypes()

      setIdentificationTypes(identificationTypesResponse)
    }

    fetchResources()
  }, [])

  useEffect(() => {
    setInstallments(null)

    if (!cardNumber || cardNumber?.length === 6 || cardNumber?.length === 16)
      return

    async function fetchPaymentMethodsAndInstallments() {
      const bin = cardNumber.replace(/\D+/g, '').slice(0, 6).toString()

      const paymentMethods = (await mp.getPaymentMethods({
        bin
      })) as PaymentMethods

      if (paymentMethods.results[0]) {
        setValue('paymentMethodId', paymentMethods.results[0].id)
        setValue('issuerId', paymentMethods.results[0].issuer.id)

        const newInstallments = (await mp.getInstallments({
          amount: totals.total.toString(),
          locale: 'pt-BR',
          bin,
          processingMode: 'aggregator'
        })) as Installment[]

        setInstallments(newInstallments[0])
      }
    }

    fetchPaymentMethodsAndInstallments()
  }, [cardNumber, totals.total, setValue])

  // https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/testing

  // APRO: Pagamento aprovado.
  // CONT: Pagamento pendente.
  // OTHE: Recusado por erro geral.
  // CALL: Recusado com validação para autorizar.
  // FUND: Recusado por quantia insuficiente.
  // SECU: Recusado por código de segurança inválido.
  // EXPI: Recusado por problema com a data de vencimento.
  // FORM: Recusado por erro no formulário.
  return (
    <Container>
      <RHFForm {...formMethods} onSubmit={onSubmit}>
        <FieldsWrapper>
          <FieldsRow>
            <RHFTextField
              label="Número do cartão"
              name="cardNumber"
              mask="9999 9999 9999 9999"
            />
            <RHFTextField label="Nome" name="cardHolderName" />
          </FieldsRow>
          <FieldsRow>
            <RHFTextField
              label="Expira em"
              name="cardExpiration"
              mask="99/9999"
            />
            <RHFTextField
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
          <RHFTextField label="E-mail" name="cardHolderEmail" />
          <FieldsRow>
            <RHFSelect
              label="Tipo de documento"
              disabled={
                !identificationTypes || identificationTypes.length === 0
              }
              options={identificationTypes?.map((id) => ({
                value: id.id,
                text: id.name
              }))}
              name="identificationType"
            />
            <RHFTextField
              label="Número do documento"
              name="identificationNumber"
              mask={['999.999.999-99', '99. 999. 999/9999-99']}
            />
          </FieldsRow>
          <Button type="submit" id="form-checkout__submit">
            Continuar
          </Button>
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
