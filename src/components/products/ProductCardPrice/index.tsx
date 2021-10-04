import { formatToCurrency } from '@/utils'
import { Container } from './styles'

type ProductCardPriceProps = {
  price: number
  promoPrice?: number | null
  quantity?: number
  muted?: boolean
}

export function ProductCardPrice({
  price,
  promoPrice,
  quantity,
  muted
}: ProductCardPriceProps) {
  return (
    <Container data-muted={muted}>
      <div data-old-price={!!promoPrice}>
        {quantity && !promoPrice && <span>{quantity}x </span>}
        <span>{formatToCurrency(price)}</span>
      </div>
      <div>
        {quantity && <span>{quantity}x </span>}
        {promoPrice && formatToCurrency(promoPrice)}
      </div>
    </Container>
  )
}
