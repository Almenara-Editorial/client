import { Container, Infos } from './styles'
import { CartProductModel } from '@/models'
import {
  ProductCardName,
  ProductCardPrice,
  ProductCardThumbnail
} from '@/components/products'

type CheckoutProductCardProps = {
  product: CartProductModel
}

export const CheckoutProductCard = ({ product }: CheckoutProductCardProps) => (
  <Container>
    <ProductCardThumbnail src={product.imageSrc} />
    <Infos>
      <ProductCardName name={product.name} textAlign="left" />
      <div className="price">
        <ProductCardPrice
          muted
          quantity={product.quantity}
          price={product.price}
        />

        <ProductCardPrice price={product.price * product.quantity} />
      </div>
    </Infos>
  </Container>
)
