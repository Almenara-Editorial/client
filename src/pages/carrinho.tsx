import { productsMapper } from '@/utils/mappers'
import { commonDataMapper, initializeApollo, parseQueryToWhere } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { CartTemplate, CartTemplateProps } from '@/components/templates'
import { filterMapper } from '@/utils/mappers/fillterMapper'

type CartProps = CartTemplateProps

export default function Cart({ products }: CartProps) {
  return <CartTemplate />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo()
  const where = parseQueryToWhere(context.query)

  const { data } = await apolloClient.query<QueryBooks, QueryBooksVariables>({
    query: QUERY_BOOKS,
    variables: {
      limit: 12,
      where
    }
  })

  return {
    props: {
      products: productsMapper(data.livros),
      filters: filterMapper({ categories: data.categorias }),
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ footer: data.rodape })
    }
  }
}
