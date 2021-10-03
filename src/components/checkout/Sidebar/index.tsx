import { Hr } from '@/components/shared'
import { useCart } from '@/contexts'
import { useRouter } from 'next/router'
import { CheckoutProducts, CheckoutTotal } from '..'
import { Container, Title, Row, OrderDetails } from './styles'

export function Sidebar() {
  const { query } = useRouter()
  const { products: cartProducts } = useCart()

  if (query.step === 'success') {
    return (
      <Container>
        <Title>Seu pedido #1</Title>
        <OrderDetails>
          <Row>
            <div>Estimativa de Entrega:</div>
            <div>28/07/2021</div>
          </Row>
          <Row>
            <div>Forma de pagamento:</div>
            <div>1</div>
          </Row>
          <Row>
            <div>Status do pagamento:</div>
            <div>1</div>
          </Row>
        </OrderDetails>
        <CheckoutProducts products={cartProducts} />
        <CheckoutTotal />
      </Container>
    )
  }

  return (
    <Container>
      <Title>Sumário</Title>
      <CheckoutProducts products={cartProducts} />
      <Hr space="xl" />
      <CheckoutTotal />
    </Container>
  )
}
