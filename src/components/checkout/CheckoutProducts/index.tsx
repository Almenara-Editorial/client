import { CustomScrollbar } from '@/components/shared/CustomScrollbar'
import { OrderProductModel } from '@/models'
import { CheckoutProductCard } from '../CheckoutProductCard'
import { Container } from './styles'

type CheckoutProductsProps = {
  products: OrderProductModel[]
}

export const CheckoutProducts = ({ products }: CheckoutProductsProps) => {
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
