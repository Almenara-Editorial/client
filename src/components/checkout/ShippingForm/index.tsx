import { RHFForm, RHFTextField, RHFRadioGroup } from '@/components/hook-form'
import { useCart, useCheckoutForm } from '@/contexts'
import { getAddressByCep, loadShippingOptionsByZipCode } from '@/services'
import { ShippingOptionModel, ShippingValues } from '@/models'
import { FieldsRow, FieldsWrapper } from '@/components/form'
import { SectionTitle, StepsButtons } from '@/components/checkout'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { filterNumbers, formatToCurrency } from '@/utils'
import { ShippingItem } from './styles'

export function ShippingForm() {
  const { nextStep, updateFormValues, formValues } = useCheckoutForm()
  const formMethods = useForm<ShippingValues>({
    resolver: yupResolver(schema),
    defaultValues: formValues.shipping
  })
  const [isLoading, setIsLoading] = useState(false)
  const [shippingOptions, setShippingOptions] = useState<ShippingOptionModel[]>(
    []
  )
  const { watch, setValue, setError } = formMethods
  const cepFieldValue = watch('cep')
  const { cartItems, updateShippingTotal } = useCart()

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

  useEffect(() => {
    setValue('shipping', '')
    setShippingOptions([])

    async function setNewShippingOptions() {
      await loadShippingOptionsByZipCode({
        zipCode: cepFieldValue,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        cart: cartItems!
      })
        .then((shippingOptions) => {
          shippingOptions && setShippingOptions(shippingOptions)
        })
        .catch((error) => console.log(error))
    }

    cartItems && cepFieldValue?.length === 9 && setNewShippingOptions()
  }, [cepFieldValue, cartItems, setValue])

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
      {shippingOptions && shippingOptions.length > 0 ? (
        <RHFRadioGroup
          name="shipping"
          onChange={(id) =>
            updateShippingTotal(
              shippingOptions.find((option) => option.id === id)?.price || 0
            )
          }
          radios={shippingOptions.map(
            (option) =>
              ({
                title: (
                  <ShippingItem>
                    <span>{option.name}</span>
                    <span>{formatToCurrency(option.price)}</span>
                  </ShippingItem>
                ),
                value: option.id
              } || [])
          )}
        />
      ) : (
        <p>Preencha o CEP</p>
      )}
      <StepsButtons />
    </RHFForm>
  )
}
