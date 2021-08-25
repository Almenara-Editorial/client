import { formatToCurrency } from '@/utils'
import { Container, Price, Installments } from './styles'

export type SingleProductPriceProps = {
  price: number
  installments?: string
}

export const SingleProductPrice = ({ price, installments }: SingleProductPriceProps) => {
  return (
    <Container>
      {price && <Price>{formatToCurrency(price)}</Price>}
      {installments && <Installments>{installments}</Installments>}
    </Container>
  )
}

export default SingleProductPrice
