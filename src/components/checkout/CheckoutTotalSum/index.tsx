import { formatToCurrency } from '@/utils'
import { Container } from './styles'

type CheckoutTotalSumProps = {
  total: number
}

export const CheckoutTotalSum = ({ total }: CheckoutTotalSumProps) => {
  return (
    <Container>
      <div>Total</div>
      <div>{formatToCurrency(total)}</div>
    </Container>
  )
}
