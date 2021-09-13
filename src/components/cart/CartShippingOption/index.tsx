import { Container } from './styles'
import { ShippingOptionModel } from '@/models'
import { formatToCurrency } from '@/utils'

export type CartShippingOptionProps = {
  option: ShippingOptionModel
}

export const CartShippingOption = ({ option }: CartShippingOptionProps) => {
  const { deliveryTime, name, price } = option
  const deliveryTimeText =
    deliveryTime + (deliveryTime === 1 ? ' dia útil' : ' dias úteis')

  return (
    <Container>
      <div>{deliveryTimeText}</div>
      <div>{formatToCurrency(price)}</div>
      <div>{name}</div>
    </Container>
  )
}
