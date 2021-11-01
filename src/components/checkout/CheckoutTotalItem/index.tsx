import { formatToCurrency } from '@/utils'
import { Container } from './styles'

type CheckoutTotalItemProps = {
  title: string
  price: number
  isDisccount?: boolean
}

export const CheckoutTotalItem = ({
  title,
  price,
  isDisccount
}: CheckoutTotalItemProps) => (
  <Container data-is-disccount={isDisccount}>
    <div>{title}</div>
    <div>
      {isDisccount ? '- ' : ''}
      {formatToCurrency(price)}
    </div>
  </Container>
)
