import { initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { AccountLayout } from '@/components/layout'
import { protectedRoutes } from '@/utils/protectedRoutes'
import {
  AccountSettingsTemplate,
  AccountSettingsTemplateProps
} from '@/components/templates'
import { loadCommonMenus } from '@/services'

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

  const commonMenus = await loadCommonMenus()

  return {
    props: {
      session,
      user: session.user,
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
