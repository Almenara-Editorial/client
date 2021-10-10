import { Pin } from '@/components/icons'
import { Anchor } from '@/components/shared'
import { useModal } from '@/hooks'
import { CartItemModel, ShippingOptionModel } from '@/models'
import { formatToCurrency } from '@/utils'
import { useState } from 'react'
import { ShippingAddressModal } from '..'
import { OnSubmitSuccessful } from '../ShippingAddressModal'
import { Container, ShippingList, ShippingOption } from './styles'

type SelectAddressButtonProps = {
  product: CartItemModel
}

export const SelectAddressButton = ({ product }: SelectAddressButtonProps) => {
  const modalMethods = useModal()
  const [shippingOptions, setShippingOptions] = useState<ShippingOptionModel[]>(
    []
  )
  const [zipCode, setZipCode] = useState('')

  function setNewShippingOptions({
    shippingOptions: newShippingOptions,
    zipCode
  }: OnSubmitSuccessful) {
    setShippingOptions(newShippingOptions)
    setZipCode(zipCode)
  }

  return (
    <Container>
      {!shippingOptions || shippingOptions.length === 0 ? (
        <>
          <Anchor as="button" size="sm" onClick={modalMethods.openModal}>
            <i>
              <Pin />
            </i>
            Selecione o endereço
          </Anchor>
          <ShippingAddressModal
            product={product}
            onSubmitSuccessful={setNewShippingOptions}
            {...modalMethods}
          />
        </>
      ) : (
        <ShippingList>
          <h3>Opções de frete: (CEP: {zipCode})</h3>
          {shippingOptions.map((option) => (
            <li key={option.id}>
              <ShippingOption>
                <span>{option.name}</span>
                <span>{formatToCurrency(option.price)}</span>
              </ShippingOption>
            </li>
          ))}
        </ShippingList>
      )}
    </Container>
  )
}

export default SelectAddressButton
