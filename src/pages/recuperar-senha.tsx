import { commonDataMapper, initializeApollo, parseQueryToWhere } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { RecoveryPasswordTemplate } from '@/components/templates'

export default function RecoveryPassword() {
  return <RecoveryPasswordTemplate />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo()
  const where = parseQueryToWhere(context.query)

  const { data } = await apolloClient.query<QueryBooks, QueryBooksVariables>({
    query: QUERY_BOOKS,
    variables: {
      limit: 12,
      where,
      recommended: {
        categorias: {
          slug: ['recomendado']
        }
      }
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ footer: data.rodape })
    }
  }
}
