import { QueryOrders_orders } from '@/graphql/generated/QueryOrders'
import { OrderModel } from '@/models/order'
import { formatToCurrency } from '../format-to-currency'

export function ordersMapper(
  orders: QueryOrders_orders[] | null | undefined
): Omit<OrderModel, 'particulars' | 'description'>[] {
  if (!orders) return []

  return orders?.map((order) => ({
    id: order.id.toString(),
    createdAt: new Date(order.created_at).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    total: formatToCurrency(Number(order.total)),
    status: order.status || ''
  }))
}
