import { RHFForm, RHFTextField, RHFRadioGroup } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { getAddressByCep } from '@/services'
import { ShippingValues } from '@/models'
import { FieldsRow, FieldsWrapper } from '@/components/form'
import { SectionTitle, StepsButtons } from '@/components/checkout'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { filterNumbers } from '@/utils'

export function ShippingForm() {
  const { nextStep, updateFormValues, formValues } = useCheckoutForm()
  const formMethods = useForm<ShippingValues>({
    resolver: yupResolver(schema),
    defaultValues: formValues.shipping
  })
  const [isLoading, setIsLoading] = useState(false)
  const { watch, setValue, setError } = formMethods
  const cepFieldValue = watch('cep')

  async function onSubmit(values: ShippingValues) {
    updateFormValues('shipping', values)
    nextStep()
  }

  useEffect(() => {
    async function handleCepChange(cep: string) {
      setIsLoading(true)

      await getAddressByCep(cep)
        .then((address) => {
          setValue('street', address.street, { shouldValidate: true })
          setValue('city', address.city, { shouldValidate: true })
          setValue('state', address.state, { shouldValidate: true })
          setValue('neighborhood', address.neighborhood, {
            shouldValidate: true
          })
        })
        .catch(() => {
          setError('cep', { message: 'CEP inválido.' })
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    cepFieldValue &&
      filterNumbers(cepFieldValue)?.length === 8 &&
      handleCepChange(cepFieldValue)
  }, [cepFieldValue, setError, setValue])

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <SectionTitle title="Endereço de entrega:" buttonText="Editar" />
      <FieldsWrapper>
        <FieldsRow>
          <RHFTextField
            label="CEP:"
            name="cep"
            disabled={isLoading}
            mask="99999-999"
          />
          <RHFTextField label="Rua:" name="street" disabled={isLoading} />
        </FieldsRow>
        <FieldsRow>
          <RHFTextField label="Número:" name="number" />
          <RHFTextField label="Complemento:" name="info" />
        </FieldsRow>
        <FieldsRow>
          <RHFTextField label="Cidade:" name="city" disabled={isLoading} />
          <RHFTextField
            label="Bairro:"
            name="neighborhood"
            disabled={isLoading}
          />
        </FieldsRow>
        <RHFTextField label="Estado:" name="state" disabled={isLoading} />
      </FieldsWrapper>
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
