import { Container, Item, OrderId, Column } from './styles'
import { OrderModel } from '@/models/order'
import { Anchor } from '@/components/shared'

type OrderProps = {
  order: OrderModel
}

export function Order({ order }: OrderProps) {
  return (
    <Container>
      <Column>
        <Item>
          <div className="title">Pedido:</div>
          <OrderId>#{order.id}</OrderId>
        </Item>
        <Item>
          <div className="title">Data do pedido:</div>
          <div>{order.createdAt}</div>
        </Item>
        <Item>
          <div className="title">Total:</div>
          <div>{order.total}</div>
        </Item>
        <Item>
          <div className="title">Status:</div>
          <div>{order.status}</div>
        </Item>
      </Column>
      <Column>
        <Item>
          <Anchor as="button" size="sm" color="primary">
            Ver pedido
          </Anchor>
        </Item>
      </Column>
    </Container>
  )
}
