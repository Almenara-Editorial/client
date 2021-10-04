import { Order } from '@/components/account'
import { OrderModel } from '@/models/order'
import { Container } from './styles'

type OrdersTemplateProps = {
  orders: OrderModel[]
}

export function OrdersTemplate({ orders }: OrdersTemplateProps) {
  return (
    <Container>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </Container>
  )
}
