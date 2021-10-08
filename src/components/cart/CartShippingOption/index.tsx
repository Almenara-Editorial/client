import { Container } from './styles'
import { ShippingOptionModel } from '@/models'
import { formatToCurrency } from '@/utils'

export type CartShippingOptionProps = {
  option: ShippingOptionModel
}

export const CartShippingOption = ({ option }: CartShippingOptionProps) => {
  const { time, name, price } = option
  const timeText = time + (time === '1' ? ' dia útil' : ' dias úteis')

  return (
    <Container>
      <div>{timeText}</div>
      <div>{formatToCurrency(price)}</div>
      <div>{name}</div>
    </Container>
  )
}
