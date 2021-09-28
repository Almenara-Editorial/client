import { FieldsRow, FieldsWrapper } from '@/components/form'
import { RHFForm, RHFRadioGroup, RHFTextField } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { StepsButtons } from '../StepsButtons'
import { schema } from './schema'
import { Item, Thumbs } from './styles'

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
  const { nextStep, paymentMethods, isLoading } = useCheckoutForm()

  async function onSubmit(values: PaymentFormValues) {
    nextStep()
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit} isLoading={isLoading.payment}>
      <RHFRadioGroup
        name="paymentMethod"
        radios={[
          {
            title: (
              <Item>
                Cartão de crédito
                <Thumbs>
                  {paymentMethods.creditCards?.map(({ thumbnail }) => (
                    <img src={thumbnail} key={thumbnail} />
                  ))}
                </Thumbs>
              </Item>
            ),
            content: (
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
            ),
            value: 1
          },
          ...paymentMethods.availableMethods?.map((payment) => ({
            title: (
              <Item>
                <img src={payment.thumbnail} />
                {payment.name}
              </Item>
            ),
            value: payment.id
          }))
        ]}
      />
      <StepsButtons />
    </RHFForm>
  )
}
