import { useCart } from '@/contexts'
import { CartProduct } from '..'
import { Container, Title } from './styles'

export const CartProductsGroup = () => {
  const { products } = useCart()

  return (
    <Container>
      <Title>Meu carrinho ({products.length} itens)</Title>
      {products?.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </Container>
  )
}
