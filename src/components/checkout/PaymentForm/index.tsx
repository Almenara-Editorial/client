import { FieldsRow, FieldsWrapper } from '@/components/form'
import { RHFForm, RHFRadioGroup, RHFTextField } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { SectionTitle } from '..'
import { StepsButtons } from '../StepsButtons'
import { schema } from './schema'

type PaymentFormValues = {
  zipCode: string
  street: string
  number: string
  info: string
  city: string
}

export function PaymentForm() {
  const formMethods = useForm<PaymentFormValues>({
    resolver: yupResolver(schema)
  })
  const { nextStep } = useCheckoutForm()

  async function onSubmit(values: PaymentFormValues) {
    nextStep()
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <RHFRadioGroup
        name="paymentMethod"
        radios={[
          {
            title: 'Cartão de crédito',
            content: (
              <>
                <FieldsWrapper>
                  <FieldsRow>
                    <RHFTextField label="Número:" name="number" />
                    <RHFTextField label="Nome" name="name" />
                  </FieldsRow>
                  <FieldsRow>
                    <RHFTextField label="Data de expiração:" name="expiry" />
                    <RHFTextField label="CVC:" name="cvc" />
                  </FieldsRow>
                </FieldsWrapper>
              </>
            ),
            value: 1
          },
          { title: '2', value: 2 },
          { title: '3', value: 3 }
        ]}
      />
      <StepsButtons />
    </RHFForm>
  )
}
