import { Container, OffPercentage, Text } from './styles'
import { ProductCardPromoBadge } from '../ProductCardPromoBadge'
import { Button, ButtonProps, Link } from '@/components/shared'
import { ProductCardModel } from '@/models'
import {
  ProductCardName,
  ProductCardPrice,
  ProductCardThumbnail
} from '@/components/products'

export type ProductCardProps = {
  product: ProductCardModel
  withBuyButton?: boolean
  buyButtonProps?: Pick<ButtonProps, 'outline'>
  withAddToCartButton?: boolean
  offPercentage?: number
}

export const ProductCard = ({
  product,
  withBuyButton,
  buyButtonProps,
  offPercentage
}: ProductCardProps) => (
  <Container>
    <ProductCardPromoBadge
      price={product.price}
      promoPrice={product.promoPrice}
    />
    <Link href={`/produtos/${product.slug}`}>
      {offPercentage && <OffPercentage>-{offPercentage}%</OffPercentage>}
      <ProductCardThumbnail src={product.imageSrc || '/'} />
      <Text>
        <ProductCardName name={product.name} />
        <ProductCardPrice
          promoPrice={product.promoPrice}
          price={product.price}
        />
        {withBuyButton && (
          <Button size="sm-full" {...buyButtonProps}>
            Comprar agora
          </Button>
        )}
      </Text>
    </Link>
  </Container>
)

export default ProductCard
