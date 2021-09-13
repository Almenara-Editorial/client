import { Loader } from '@/components/shared'
import { useCart } from '@/contexts'
import { CartProduct } from '..'
import { Container, Title } from './styles'

export const CartProductsGroup = () => {
  const { products, isLoading } = useCart()

  if (isLoading.products)
    return (
      <Container>
        <Loader message="Carregando seus produtos" />
      </Container>
    )

  return (
    <Container>
      <Title>Meu carrinho ({products.length} itens)</Title>
      {products?.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </Container>
  )
}
