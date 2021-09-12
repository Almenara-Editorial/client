import { CartProductsGroup, CartSummary } from '@/components/cart'
import { Container, Main } from './styles'

export function CartTemplate() {
  return (
    <Container>
      <Main>
        <CartProductsGroup />
        <CartSummary />
      </Main>
    </Container>
  )
}
