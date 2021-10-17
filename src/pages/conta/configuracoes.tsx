import { commonDataMapper, initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { AccountLayout } from '@/components/layout'
import { protectedRoutes } from '@/utils/protectedRoutes'
import {
  QueryOrders,
  QueryOrdersVariables
} from '@/graphql/generated/QueryOrders'
import { QUERY_ORDERS } from '@/graphql/queries/orders'
import {
  AccountSettingsTemplate,
  AccountSettingsTemplateProps
} from '@/components/templates'

type AccountSettingsProps = AccountSettingsTemplateProps

export default function AccountSettings({
  user,
  session
}: AccountSettingsProps) {
  return (
    <AccountLayout>
      <AccountSettingsTemplate session={session} user={user} />
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

  return {
    props: {
      session,
      user: session.user,
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
