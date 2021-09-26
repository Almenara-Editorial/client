import { RadioGroup } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { useForm } from 'react-hook-form'
import { SectionTitle } from '../SectionTitle'
import { StepsButtons } from '../StepsButtons'
import { Fields } from './styles'

type ShippingFormValues = {
  zipCode: string
  street: string
  number: string
  info: string
  city: string
}

export function ShippingForm() {
  const formMethods = useForm<ShippingFormValues>()
  const { nextStep } = useCheckoutForm()

  async function onSubmit(values: ShippingFormValues) {
    nextStep()
    console.log(values)
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <SectionTitle title="Endereço de entrega:" buttonText="Editar" />
      <Fields>
        <RHFTextField label="CEP:" name="zipCode" />
        <RHFTextField label="Rua:" name="street" />
        <RHFTextField label="Número:" name="number" />
        <RHFTextField label="Complemento:" name="info" />
        <RHFTextField label="Cidade:" name="city" />
        <RHFTextField label="Estado:" name="state" />
      </Fields>
      <SectionTitle title="Opções de entrega:" />
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
