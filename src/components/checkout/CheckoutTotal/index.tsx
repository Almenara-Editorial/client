import { Hr } from '@/components/shared'
import { CartTotalModel } from '@/models'
import { CheckoutTotalItem, CheckoutTotalSum } from '..'
import { Container } from './styles'

type CheckoutTotalProps = {
  totals: CartTotalModel
  itemsLength: number
}

export const CheckoutTotal = ({ itemsLength, totals }: CheckoutTotalProps) => {
  return (
    <Container>
      <CheckoutTotalItem
        title={`Subtotal (${itemsLength} itens)`}
        price={totals.products}
      />
      <CheckoutTotalItem title="Frete" price={totals.shipping} />
      <Hr space="lg" />
      <CheckoutTotalSum total={totals.total} />
    </Container>
  )
}
