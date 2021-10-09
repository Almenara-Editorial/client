import { Container } from './styles'
import { ShippingOptionModel } from '@/models'
import { formatToCurrency } from '@/utils'

export type CartShippingOptionProps = {
  option: ShippingOptionModel
}

export const CartShippingOption = ({ option }: CartShippingOptionProps) => {
  const { estimatedDelivery, name, price } = option

  return (
    <Container>
      <div>
        {name} - Entrega prevista: {estimatedDelivery}
      </div>
      <div>{formatToCurrency(price)}</div>
    </Container>
  )
}
