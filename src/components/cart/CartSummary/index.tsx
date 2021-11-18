import { PayPalButton } from '@/components/checkout'
import { MediaMatch } from '@/components/layout'
import { ButtonLink, Hr, Link } from '@/components/shared'
import { useCart } from '@/contexts'
import { formatToCurrency } from '@/utils'
import { Container, Item, Title, Total, PaymentButtons } from './styles'

export const CartSummary = () => {
  const { cartItems, totals } = useCart()

  return (
    <Container>
      <Title>Sumário</Title>
      <Item>
        <div>Subtotal ({cartItems?.length} itens):</div>
        <div>{formatToCurrency(totals.products)}</div>
      </Item>
      {/* <Item>
        <div>Estimativa de frete:</div>
        <div>{formatToCurrency(totals.shipping)}</div>
      </Item> */}
      {totals.disccounts > 0 && (
        <Item>
          <div>Total de descontos:</div>
          <div className="withDisccount">
            - {formatToCurrency(totals.disccounts)}
          </div>
        </Item>
      )}
      <MediaMatch greaterThan="medium">
        <Hr space="xl" />
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Hr space="lg" />
      </MediaMatch>
      <Total>
        <div>Total</div>
        <div>{formatToCurrency(totals.total)}</div>
      </Total>
      <PaymentButtons>
        <ButtonLink href="/checkout">Continuar para Checkout</ButtonLink>
        <PayPalButton />
      </PaymentButtons>
      <Link href="/produtos">Continuar comprando</Link>
    </Container>
  )
}
