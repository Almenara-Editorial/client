import { formatToCurrency } from '@/utils'
import { Container } from './styles'

type CheckoutTotalItemProps = {
  title: string
  price: number
}

export const CheckoutTotalItem = ({ title, price }: CheckoutTotalItemProps) => (
  <Container>
    <div>{title}</div>
    <div>{formatToCurrency(price)}</div>
  </Container>
)
