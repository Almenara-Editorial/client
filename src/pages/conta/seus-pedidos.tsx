import { initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { OrdersTemplate } from '@/components/templates'
import { AccountLayout } from '@/components/layout'
import { protectedRoutes } from '@/utils/protectedRoutes'
import {
  QueryOrders,
  QueryOrdersVariables
} from '@/graphql/generated/QueryOrders'
import { QUERY_ORDERS } from '@/graphql/queries/orders'
import { ordersMapper } from '@/utils/mappers'
import { OrderModel } from '@/models/order'
import { loadCommonMenus } from '@/services'

type OrdersProps = {
  orders: OrderModel[]
}

export default function Orders({ orders }: OrdersProps) {
  return (
    <AccountLayout>
      <OrdersTemplate orders={orders} />
    </AccountLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo({}, session)
  if (!session)
    return {
      props: {}
    }

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      sort: 'id:desc'
    }
  })
  const commonMenus = await loadCommonMenus()

  return {
    props: {
      orders: ordersMapper(data.orders),
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
