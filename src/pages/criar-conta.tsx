import { initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { SignUpTemplate } from '@/components/templates'
import { loadCommonMenus } from '@/services'

export default function SignUp() {
  return <SignUpTemplate />
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
