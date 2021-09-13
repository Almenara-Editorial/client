import { useCart } from '@/contexts'
import { CartShippingForm, CartShippingOptions, ShippingWarning } from '..'
import { Container } from './styles'

export const CartShippingPreview = () => {
  const { shippingOptions } = useCart()

  return (
    <Container>
      <CartShippingForm />
      <CartShippingOptions options={shippingOptions} />
      <ShippingWarning />
    </Container>
  )
}
