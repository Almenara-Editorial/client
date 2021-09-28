import { RHFForm, RHFTextField, RHFRadioGroup } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { getAddressByCep } from '@/services'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SectionTitle } from '../SectionTitle'
import { StepsButtons } from '../StepsButtons'
import { Fields } from './styles'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

type ShippingFormValues = {
  cep: string
  street: string
  number: string
  info: string
  city: string
  state: string
}

export function ShippingForm() {
  const formMethods = useForm<ShippingFormValues>({
    resolver: yupResolver(schema)
  })
  const [isLoading, setIsLoading] = useState(false)
  const { watch, setValue, setError } = formMethods
  const { nextStep } = useCheckoutForm()
  const cepFieldValue = watch('cep')

  async function onSubmit(values: ShippingFormValues) {
    nextStep()
    console.log(values)
  }

  useEffect(() => {
    async function handleCepChange(cep: string) {
      setIsLoading(true)

      await getAddressByCep(cep)
        .then((address) => {
          setValue('street', address.street, { shouldValidate: true })
          setValue('city', address.city, { shouldValidate: true })
          setValue('state', address.state, { shouldValidate: true })
        })
        .catch(() => {
          setError('cep', { message: 'CEP inválido.' })
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    cepFieldValue &&
      cepFieldValue.length === 8 &&
      handleCepChange(cepFieldValue)
  }, [cepFieldValue, setError, setValue])

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <SectionTitle title="Endereço de entrega:" buttonText="Editar" />
      <Fields>
        <RHFTextField label="CEP:" name="cep" disabled={isLoading} />
        <RHFTextField label="Rua:" name="street" disabled={isLoading} />
        <RHFTextField label="Número:" name="number" />
        <RHFTextField label="Complemento:" name="info" />
        <RHFTextField label="Cidade:" name="city" disabled={isLoading} />
        <RHFTextField label="Estado:" name="state" disabled={isLoading} />
      </Fields>
      <SectionTitle title="Opções de entrega:" />
      <RHFRadioGroup
        name="shipping"
        radios={[
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' }
        ]}
      />
      <StepsButtons />
    </RHFForm>
  )
}
