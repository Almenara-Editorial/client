import { commonDataMapper, initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { SignInTemplate } from '@/components/templates'

export default function SignIn() {
  return <SignInTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryBooks, QueryBooksVariables>({
    query: QUERY_BOOKS,
    variables: {
      limit: 1
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
