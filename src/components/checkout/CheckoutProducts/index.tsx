import { CustomScrollbar } from '@/components/shared/CustomScrollbar'
import { useCart } from '@/contexts'
import { CheckoutProductCard } from '../CheckoutProductCard'
import { Container } from './styles'

export const CheckoutProducts = () => {
  const { products } = useCart()

  return (
    <Container>
      <CustomScrollbar width="100%">
        {products?.map((product) => (
          <CheckoutProductCard key={product.id} product={product} />
        ))}
      </CustomScrollbar>
    </Container>
  )
}
