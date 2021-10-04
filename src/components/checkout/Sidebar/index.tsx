import { Hr, PaymentCardId } from '@/components/shared'
import { PaymentCard } from '@/components/shared'
import { useCart, useCheckoutForm } from '@/contexts'
import { getImageUrl } from '@/utils'
import { useRouter } from 'next/router'
import { CheckoutProducts, CheckoutTotal } from '..'
import { Container, Title, Row, OrderDetails } from './styles'

export function Sidebar() {
  const { query } = useRouter()
  const { products: cartProducts, totals, cartLength } = useCart()
  const { createdOrder } = useCheckoutForm()

  if (query.step === 'success' && createdOrder) {
    return (
      <Container>
        <Title>Seu pedido #{createdOrder.id}</Title>
        <OrderDetails>
          <Row>
            <div>Estimativa de Entrega:</div>
            <div>99/99/9999</div>
          </Row>
          <Row>
            <div>Forma de pagamento:</div>
            <PaymentCard
              paymentId={createdOrder?.payment?.id as PaymentCardId}
              lastFour={createdOrder?.payment?.lastFour}
            />
          </Row>
          <Row>
            <div>Status do pagamento:</div>
            <div>{createdOrder?.payment.status}</div>
          </Row>
        </OrderDetails>
        <CheckoutProducts
          products={createdOrder?.books.map(({ quantity, book }) => ({
            id: book.id.toString(),
            imageSrc: getImageUrl(book.image?.url),
            name: book.name,
            price: book.promoPrice || book.price,
            quantity,
            slug: book.slug
          }))}
        />
        <CheckoutTotal
          totals={{
            products: createdOrder?.books.reduce(
              (total, { quantity, book }) => total + book.price * quantity,
              0
            ),
            shipping: 9999,
            total: Number(createdOrder.total)
          }}
          itemsLength={createdOrder?.books.length}
        />
      </Container>
    )
  }

  return (
    <Container>
      <Title>Sumário</Title>
      <CheckoutProducts products={cartProducts} />
      <Hr space="xl" />
      <CheckoutTotal totals={totals} itemsLength={cartLength} />
    </Container>
  )
}
