import { formatToCurrency } from '@/utils'
import { Container } from './styles'

type ProductCardPriceProps = {
  price: number
  quantity?: number
  muted?: boolean
}

export function ProductCardPrice({
  price,
  quantity,
  muted
}: ProductCardPriceProps) {
  return (
    <Container data-muted={muted}>
      {quantity && <span>{quantity}x </span>}
      {formatToCurrency(price)}
    </Container>
  )
}
