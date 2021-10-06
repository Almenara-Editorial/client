import { commonDataMapper, initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { NewPasswordTemplate } from '@/components/templates'

export default function ForgotPassword() {
  return <NewPasswordTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryBooks, QueryBooksVariables>({
    query: QUERY_BOOKS,
    variables: {
      limit: 12
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
