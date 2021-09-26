import { productsMapper } from '@/utils/mappers'
import { commonDataMapper, initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { CheckoutTemplate } from '@/components/templates'
import { filterMapper } from '@/utils/mappers/fillterMapper'

export default function Checkout() {
  return <CheckoutTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryBooks, QueryBooksVariables>({
    query: QUERY_BOOKS
  })

  return {
    props: {
      recommended: productsMapper(data.recommended),
      products: productsMapper(data.livros),
      filters: filterMapper({ categories: data.categorias }),
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ footer: data.rodape })
    }
  }
}
