import { Container, OffPercentage, Text, ProductAnchor } from './styles'
import { ProductCardPromoBadge } from '../ProductCardPromoBadge'
import { Anchor, Button, ButtonProps, Link } from '@/components/shared'
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
    <Link href={`/produtos/${product.slug}`} as={ProductAnchor}>
      {offPercentage && <OffPercentage>-{offPercentage}%</OffPercentage>}
      <ProductCardThumbnail
        muted={!product.stock || product.stock < 1}
        src={product.imageSrc[0]}
      />
      <Text>
        <ProductCardName name={product.name} />
        {product?.stock > 0 && (
          <>
            <ProductCardPrice
              promoPrice={product.promoPrice}
              price={product.price}
            />
            {withBuyButton && (
              <Button size="sm-full" {...buyButtonProps}>
                Comprar agora
              </Button>
            )}
          </>
        )}
      </Text>
    </Link>
    {(!product.stock || product.stock < 1) && (
      <Anchor size="sm" align="center" color="primary">
        Avise-me quando chegar
      </Anchor>
    )}
  </Container>
)

export default ProductCard
