import { productsMapper } from '@/utils/mappers'
import { commonDataMapper, initializeApollo } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { ProductsTemplate, ProductsTemplateProps } from '@/components/templates'

type ProductsProps = ProductsTemplateProps

export default function Products({ products }: ProductsProps) {
  return <ProductsTemplate products={products} />
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
      products: productsMapper(data.livros),
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ footer: data.rodape })
    }
  }
}
