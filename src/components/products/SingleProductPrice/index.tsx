import { Checkmark } from '@/components/icons'
import { DisccountModel } from '@/models'
import { formatToCurrency } from '@/utils'
import { Container, Price, Installments, Disccount } from './styles'

export type SingleProductPriceProps = {
  price: number
  promoPrice?: number | null
  installments?: string
  quantity: number
  disccounts: DisccountModel[]
}

export const SingleProductPrice = ({
  price,
  promoPrice,
  disccounts,
  installments
}: SingleProductPriceProps) => {
  return (
    <Container>
      {promoPrice && <Price>{formatToCurrency(promoPrice)}</Price>}
      {price && (
        <Price data-old-price={!!promoPrice}>{formatToCurrency(price)}</Price>
      )}
      {installments && <Installments>{installments}</Installments>}
      {disccounts?.length > 0 && (
        <Disccount>
          <h3>
            <i>
              <Checkmark />
            </i>
            Esse produto possuí descontos de acordo com a quantidade:
          </h3>
          <table>
            {disccounts.map((disccount) => (
              <tr key={disccount.minQuantity}>
                <td>A partir de {disccount.minQuantity} unidades.</td>
                <td>{disccount.percentage * 100}% de desconto</td>
              </tr>
            ))}
          </table>
        </Disccount>
      )}
    </Container>
  )
}

export default SingleProductPrice
