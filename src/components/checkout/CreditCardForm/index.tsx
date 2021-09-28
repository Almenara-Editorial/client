import { FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { RHFSelect } from '@/components/hook-form/Select'
import { Button } from '@/components/shared'
import { useCart } from '@/contexts'
import { CardToken, IdentificationType, Installment } from '@/models'
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
}

export function CreditCardForm({ onGetCardToken }: CreditCardFormProps) {
  const { totals } = useCart()
  const formMethods = useForm<CreditCardFormValues>()
  const { watch } = formMethods
  const cardNumber = watch('cardNumber')

  const [identificationTypes, setIdentificationTypes] = useState<
    IdentificationType[]
  >([])

  const [installments, setInstallments] = useState<Installment | null>(null)

  async function onSubmit(values: CreditCardFormValues) {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
      locale: 'pt-BR',
      advancedFraudPrevention: true
    })
    const [cardExpirationMonth, cardExpirationYear] =
      values.cardExpiration.split('/')
    const cardToken = (await mp.createCardToken({
      cardNumber: values.cardNumber.replace(/\D+/g, ''),
      cardholderName: values.cardHolderName,
      cardExpirationMonth,
      cardExpirationYear,
      securityCode: values.securityCode,
      identificationType: values.identificationType,
      identificationNumber: values.identificationNumber
    })) as CardToken

    cardToken && onGetCardToken && onGetCardToken(cardToken.id)

    console.log(cardToken)
  }

  useEffect(() => {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
      locale: 'pt-BR',
      advancedFraudPrevention: true
    })

    async function fetchResources() {
      const identificationTypesResponse = await mp.getIdentificationTypes()

      setIdentificationTypes(identificationTypesResponse)
    }

    fetchResources()
  }, [])

  useEffect(() => {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
      locale: 'pt-BR',
      advancedFraudPrevention: true
    })

    setInstallments(null)

    if (!cardNumber || cardNumber?.length === 6 || cardNumber?.length === 16)
      return

    async function fetchPaymentMethodsAndInstallments() {
      const bin = cardNumber.replace(/\D+/g, '').slice(0, 6).toString()

      const paymentMethods = await mp.getPaymentMethods({
        bin
      })

      const newInstallments = (await mp.getInstallments({
        amount: totals.total.toString(),
        locale: 'pt-BR',
        bin,
        processingMode: 'aggregator'
      })) as Installment[]

      setInstallments(newInstallments[0])
    }

    fetchPaymentMethodsAndInstallments()
  }, [cardNumber, totals.total])

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
          <RHFTextField label="Número do cartão" name="cardNumber" />
          <RHFTextField label="Nome" name="cardHolderName" />
          <RHFTextField label="Expira em" name="cardExpiration" />
          <RHFTextField label="E-mail" name="cardHolderEmail" />
          <RHFTextField label="Código de segurança" name="securityCode" />
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
          <RHFSelect
            label="Tipo de documento"
            disabled={!identificationTypes || identificationTypes.length === 0}
            options={identificationTypes?.map((id) => ({
              value: id.id,
              text: id.name
            }))}
            name="identificationType"
          />
          <RHFTextField
            label="Número do documento"
            name="identificationNumber"
          />
          <Button type="submit" id="form-checkout__submit">
            Pagar
          </Button>
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
