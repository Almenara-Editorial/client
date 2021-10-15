import { Container, Column, Header } from './styles'
import { OrderModel } from '@/models/order'
import { Anchor, DownloadButton } from '@/components/shared'
import { OrderProductCard } from '../OrderProductCard'

type OrderProps = {
  order: OrderModel
}

export function Order({ order }: OrderProps) {
  return (
    <Container>
      <Header>
        <div>PEDIDO: {order.id}</div>
        <div>DATA: {order.createdAt}</div>
        <div>TOTAL: {order.total}</div>
        <div>STATUS: {order.status}</div>
        <div>
          <Anchor as="button" size="xs" color="primary">
            Ver pedido
          </Anchor>
        </div>
      </Header>
      <Column>
        {order.books.map((book) => (
          <OrderProductCard key={book.id} product={book} />
        ))}
      </Column>
      <Column>
        {order.paymentUrl && (
          <DownloadButton
            url={order.paymentUrl}
            text="Download do documento para pagamento"
          />
        )}
      </Column>
    </Container>
  )
}
