import { CartProductCardModel } from '@/models'
import { ProductCardName, ProductCardThumbnail, ProductCardPrice } from '@/components/products'
import { Container, Text } from './styles'
import ButtonAddToCart from '../ButtonAddToCart'

export type CartProductCardProps = {
  product: CartProductCardModel
}

export const CartProductCard = ({ product }: CartProductCardProps) => (
  <Container>
    <ProductCardThumbnail src={product.thumbnailSrc} />
    <Text>
      <ProductCardName name={product.name} textAlign="left" />
      <ProductCardPrice price={product.price} />
      <ButtonAddToCart isInCart={false} />
    </Text>
  </Container>
)

export default CartProductCard
