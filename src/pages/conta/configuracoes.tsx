import { initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { AccountLayout } from '@/components/layout'
import { protectedRoutes } from '@/utils/protectedRoutes'
import {
  AccountSettingsTemplate,
  AccountSettingsTemplateProps
} from '@/components/templates'
import { loadCommonMenus } from '@/services'
import { QUERY_USER } from '@/graphql/queries'
import { QueryUser } from '@/graphql/generated/QueryUser'

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

  const { data } = await apolloClient.query<QueryUser>({
    query: QUERY_USER,
    context: { session }
  })

  const commonMenus = await loadCommonMenus()

  return {
    props: {
      session,
      user: data.me,
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
