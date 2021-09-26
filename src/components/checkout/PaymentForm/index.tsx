import { FieldsRow, FieldsWrapper, RadioGroup } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { useForm } from 'react-hook-form'
import { SectionTitle } from '..'
import { StepsButtons } from '../StepsButtons'

type PaymentFormValues = {
  zipCode: string
  street: string
  number: string
  info: string
  city: string
}

export function PaymentForm() {
  const formMethods = useForm<PaymentFormValues>()
  const { nextStep } = useCheckoutForm()

  async function onSubmit(values: PaymentFormValues) {
    nextStep()
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <SectionTitle title="Cartão de crédito:" />
      <FieldsWrapper>
        <RHFTextField label="Número:" name="number" />
        <RHFTextField
          label="Nome (o mesmo que consta no cartão):"
          name="name"
        />
        <FieldsRow>
          <RHFTextField label="Data de expiração:" name="expiry" />
          <RHFTextField label="CVC:" name="cvc" />
        </FieldsRow>
      </FieldsWrapper>
      <SectionTitle title="Outras formas de pagamento:" />
      <RadioGroup
        radios={[
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 }
        ]}
      />
      <StepsButtons />
    </RHFForm>
  )
}
