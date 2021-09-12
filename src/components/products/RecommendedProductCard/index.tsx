import { ProductCardModel } from '@/models'
import {
  ProductCardName,
  ProductCardThumbnail,
  ProductCardPrice,
  ButtonAddToCart
} from '@/components/products'
import { Container, Text } from './styles'

export type RecommendedProductCardProps = {
  product: ProductCardModel
}

export const RecommendedProductCard = ({
  product
}: RecommendedProductCardProps) => {
  return (
    <Container>
      <ProductCardThumbnail src={product.imageSrc} />
      <Text>
        <ProductCardName name={product.name} textAlign="left" />
        <ProductCardPrice price={product.price} />
        <ButtonAddToCart productId={product.id} />
      </Text>
    </Container>
  )
}
