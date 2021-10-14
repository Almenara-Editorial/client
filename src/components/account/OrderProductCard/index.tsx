import {
  ProductCardName,
  ProductCardPrice,
  ProductCardThumbnail
} from '@/components/products'
import { Link } from '@/components/shared'
import { OrderProductModel } from '@/models'
import { Container } from './styles'

type OrderProductCardProps = {
  product: OrderProductModel
}

export function OrderProductCard({ product }: OrderProductCardProps) {
  return (
    <Link as={Container} href={`/produtos/${product.slug}`}>
      <ProductCardThumbnail src={product.imageSrc[0]} />
      <div className="infos">
        <ProductCardName textAlign="left" name={product.name} />
        <ProductCardPrice quantity={product.quantity} price={product.price} />
      </div>
    </Link>
  )
}
