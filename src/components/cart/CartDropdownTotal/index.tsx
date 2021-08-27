import { useCart } from '@/contexts'
import { formatToCurrency } from '@/utils'
import { Container } from './styles'

export const CartDropdownTotal = () => {
  const {
    totals: { products }
  } = useCart()

  if (!products || products === 0) return null

  return (
    <Container>
      <span>Total dos itens:</span>
      <span>{formatToCurrency(products)}</span>
    </Container>
  )
}

export default CartDropdownTotal
