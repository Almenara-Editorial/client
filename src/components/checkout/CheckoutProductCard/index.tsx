import { Container, Infos } from './styles'
import { OrderProductModel } from '@/models'
import {
  ProductCardName,
  ProductCardPrice,
  ProductCardThumbnail
} from '@/components/products'

type CheckoutProductCardProps = {
  product: OrderProductModel
}

export const CheckoutProductCard = ({ product }: CheckoutProductCardProps) => (
  <Container>
    <ProductCardThumbnail src={product.imageSrc[0]} />
    <Infos>
      <ProductCardName name={product.name} textAlign="left" />
      <div className="price">
        <ProductCardPrice
          muted
          quantity={product.quantity}
          price={product.price}
          promoPrice={product.promoPrice}
        />

        <ProductCardPrice
          price={(product?.promoPrice || product?.price) * product.quantity}
        />
      </div>
    </Infos>
  </Container>
)
