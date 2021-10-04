import { formatToCurrency } from '@/utils'
import { Container, Price, Installments } from './styles'

export type SingleProductPriceProps = {
  price: number
  promoPrice?: number | null
  installments?: string
}

export const SingleProductPrice = ({
  price,
  promoPrice,
  installments
}: SingleProductPriceProps) => {
  return (
    <Container>
      {promoPrice && <Price>{formatToCurrency(promoPrice)}</Price>}
      {price && (
        <Price data-old-price={!!promoPrice}>{formatToCurrency(price)}</Price>
      )}
      {installments && <Installments>{installments}</Installments>}
    </Container>
  )
}

export default SingleProductPrice
