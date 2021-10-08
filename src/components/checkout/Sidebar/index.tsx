import { Hr, PaymentCardId } from '@/components/shared'
import { PaymentCard } from '@/components/shared'
import { useCart, useCheckoutForm } from '@/contexts'
import { addDays, getImageUrl } from '@/utils'
import { useRouter } from 'next/router'
import { CheckoutProducts, CheckoutTotal } from '..'
import { Container, Title, Row, OrderDetails } from './styles'

export function Sidebar() {
  const { query } = useRouter()
  const { products: cartProducts, totals, cartLength } = useCart()
  const { createdOrder } = useCheckoutForm()

  if (query.step === 'success' && createdOrder) {
    // const deliveryDate = addDays(
    //   new Date(),
    //   Number(createdOrder.shipping.time)
    // ).toLocaleString('pt-BR')

    return (
      <Container>
        <Title>Seu pedido #{createdOrder.id}</Title>
        <OrderDetails>
          <Row>
            <div>Estimativa de Entrega:</div>
            <div>{createdOrder?.shipping.time} dias.</div>
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
            imageSrc: [getImageUrl(book.image[0]?.url)],
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
            shipping: createdOrder.shipping.price,
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
