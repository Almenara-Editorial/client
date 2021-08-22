import { formatToCurrency } from '@/utils'
import { Container } from './styles'

type ProductCardPriceProps = {
  price: number
}

export function ProductCardPrice({ price }: ProductCardPriceProps) {
  return <Container>{formatToCurrency(price)}</Container>
}
