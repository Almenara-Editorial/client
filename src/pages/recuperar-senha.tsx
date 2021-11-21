import { initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { ForgotPasswordTemplate } from '@/components/templates'
import { loadCommonMenus } from '@/services'

export default function ForgotPassword() {
  return <ForgotPasswordTemplate />
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
