import { Hr } from '@/components/shared'
import { useCart } from '@/contexts'
import { CheckoutTotalItem } from '..'
import { CheckoutTotalSum } from '../CheckoutTotalSum'
import { Container } from './styles'

export const CheckoutTotal = () => {
  const { totals, cartItems } = useCart()

  return (
    <Container>
      <CheckoutTotalItem
        title={`Subtotal (${cartItems?.length} itens)`}
        price={totals.products}
      />
      <CheckoutTotalItem title="Frete" price={totals.shipping} />
      <Hr space="lg" />
      <CheckoutTotalSum />
    </Container>
  )
}
