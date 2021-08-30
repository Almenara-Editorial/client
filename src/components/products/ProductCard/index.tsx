import { Container, OffPercentage, Text } from './styles'
import { Button, ButtonProps } from '@/components/shared'
import { ProductCardName, ProductCardPrice, ProductCardThumbnail } from '@/components/products'
import { ProductCardModel } from '@/models'

export type ProductCardProps = {
  product: ProductCardModel
  withBuyButton?: boolean
  buyButtonProps?: Pick<ButtonProps, 'outline'>
  withAddToCartButton?: boolean
  offPercentage?: number
}

export const ProductCard = ({ product, withBuyButton, buyButtonProps, offPercentage }: ProductCardProps) => (
  <Container>
    {offPercentage && <OffPercentage>-{offPercentage}%</OffPercentage>}
    <ProductCardThumbnail src={product.imageSrc || '/'} />
    <Text>
      <ProductCardName name={product.name} />
      <ProductCardPrice price={product.price} />
      {withBuyButton && (
        <Button size="sm-full" {...buyButtonProps}>
          Comprar agora
        </Button>
      )}
    </Text>
  </Container>
)

export default ProductCard
