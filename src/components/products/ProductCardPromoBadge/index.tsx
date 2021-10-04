import { ImageProps } from '@/components/shared'
import { Container } from './styles'

type ProductCardPromoBadgeProps = Pick<ImageProps, 'aria-label'> & {
  src?: string | undefined
  price: number | undefined | null
  promoPrice: number | undefined | null
}

export function ProductCardPromoBadge({
  price,
  promoPrice
}: ProductCardPromoBadgeProps) {
  if (!promoPrice || !price) return null

  const percentage = Math.round(100 - (promoPrice / price) * 100)

  return <Container>- {percentage}%</Container>
}
