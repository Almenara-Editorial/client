import { initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { NewPasswordTemplate } from '@/components/templates'
import { loadCommonMenus } from '@/services'

export default function ForgotPassword() {
  return <NewPasswordTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const commonMenus = await loadCommonMenus()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
