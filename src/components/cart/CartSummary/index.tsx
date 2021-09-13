import { ButtonLink, Hr, Link } from '@/components/shared'
import { useCart } from '@/contexts'
import { formatToCurrency } from '@/utils'
import { Container, Item, Title, Total } from './styles'

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
      {/* <Item>
        <div>Cupom aplicado:</div>
        <div className="withDisccount">
          - {formatToCurrency(totals.products)}
        </div>
      </Item> */}
      <Hr space="xl" />
      <Total>
        <div>Total</div>
        <div>{formatToCurrency(totals.total)}</div>
      </Total>
      <ButtonLink href="/">Continuar para Checkout</ButtonLink>
      <Link href="/produtos">Continuar comprando</Link>
    </Container>
  )
}
