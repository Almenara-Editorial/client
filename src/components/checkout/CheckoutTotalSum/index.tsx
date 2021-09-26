import { useCart } from '@/contexts'
import { formatToCurrency } from '@/utils'
import { Container } from './styles'

export const CheckoutTotalSum = () => {
  const { totals } = useCart()

  return (
    <Container>
      <div>Total</div>
      <div>{formatToCurrency(totals.total)}</div>
    </Container>
  )
}
