import { FieldsWrapper, FieldsRow } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { RHFSelect } from '@/components/hook-form/Select'
import { useCart, useCheckoutForm } from '@/contexts'
import { useDebounce } from '@/hooks'
import { CreditCardPaymentValues, PaymentMethods } from '@/models'
import { filterNumbers } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IdentificationDocumentFields } from '..'
import { StepsButtons } from '../StepsButtons'
import { schema } from './schema'
import { Container } from './styles'

export function CreditCardForm() {
  const {
    updateFormValues,
    formValues,
    creditCardInstallments,
    setCreditCardInstallments,
    nextStep
  } = useCheckoutForm()
  const formMethods = useForm<CreditCardPaymentValues>({
    resolver: yupResolver(schema),
    defaultValues: formValues.payment
  })
  const { watch, setValue } = formMethods
  const cardNumber = useDebounce(watch('cardNumber'), 800)
  const { totals } = useCart()

  async function onSubmit(values: CreditCardPaymentValues) {
    const [cardExpirationMonth, cardExpirationYear] =
      values.cardExpiration.split('/')

    const cardToken = await window.mp
      .createCardToken({
        cardNumber: filterNumbers(values.cardNumber),
        cardholderName: values.cardHolderName,
        cardExpirationMonth,
        cardExpirationYear,
        securityCode: values.securityCode,
        identificationType: values.identificationType,
        identificationNumber: filterNumbers(values.identificationNumber)
      })
      .catch((error) => console.log(error))

    !!cardToken &&
      updateFormValues('payment', { ...values, token: cardToken.id })
    nextStep()
  }

  useEffect(() => {
    if (!cardNumber || cardNumber?.length < 15) {
      return setCreditCardInstallments(null)
    }

    if (cardNumber === formValues?.payment?.cardNumber) {
      return
    }

    setCreditCardInstallments(null)

    async function fetchPaymentMethodsAndInstallments() {
      const bin = filterNumbers(cardNumber).slice(0, 6).toString()
      const paymentMethods = (await window.mp.getPaymentMethods({
        bin
      })) as PaymentMethods

      if (paymentMethods.results[0]) {
        setValue('paymentTypeId', paymentMethods.results[0].payment_type_id)
        setValue('issuerId', paymentMethods.results[0].issuer.id.toString())

        const newInstallments = await window.mp.getInstallments({
          amount: totals.total.toString(),
          locale: 'pt-BR',
          bin,
          processingMode: 'aggregator'
        })

        setCreditCardInstallments(newInstallments[0])
      }
    }

    fetchPaymentMethodsAndInstallments()
  }, [
    cardNumber,
    totals.total,
    setValue,
    setCreditCardInstallments,
    formValues?.payment?.cardNumber
  ])

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
              autoComplete="cc-number"
            />
            <RHFTextField
              labelStyle="static"
              label="Nome"
              allCaps
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
              onChange={(value) =>
                setValue(
                  'installmentsText',
                  creditCardInstallments?.payer_costs.find(
                    (installment) => installment.installments === value
                  )?.recommended_message || ''
                )
              }
              disabled={
                !creditCardInstallments?.payer_costs ||
                creditCardInstallments.payer_costs?.length === 0
              }
              disabledPlaceholder="Preencha os dados do cartão"
              options={
                creditCardInstallments?.payer_costs?.map((installment) => ({
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
          <StepsButtons />
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
