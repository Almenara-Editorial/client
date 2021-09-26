import {
  CartProductsGroup,
  CartShippingPreview,
  CartSummary
} from '@/components/cart'
import { RecommendedProducts } from '@/components/products'
import { ProductModel } from '@/models'
import { Container, Main } from './styles'

export type CartTemplateProps = {
  recommended: ProductModel[]
}

export function CartTemplate({ recommended }: CartTemplateProps) {
  return (
    <Container>
      <RecommendedProducts products={recommended} />
      <Main>
        <div>
          <CartProductsGroup />
          <CartShippingPreview />
        </div>
        <CartSummary />
      </Main>
    </Container>
  )
}
