import { productsMapper } from '@/utils/mappers'
import { initializeApollo, parseQueryToWhere } from '@/utils'
import { GetServerSideProps } from 'next'
import { QUERY_BOOKS } from '@/graphql/queries'
import { QueryBooks, QueryBooksVariables } from '@/graphql/generated/QueryBooks'
import { ProductsTemplate, ProductsTemplateProps } from '@/components/templates'
import { filterMapper } from '@/utils/mappers/fillterMapper'
import { ProductsFilterProvider } from '@/contexts'
import { loadCommonMenus } from '@/services'

type ProductsProps = ProductsTemplateProps

export default function Products({
  products,
  recommended,
  filters
}: ProductsProps) {
  return (
    <ProductsFilterProvider>
      <ProductsTemplate
        filters={filters}
        products={products}
        recommended={recommended}
      />
    </ProductsFilterProvider>
  )
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
  const commonMenus = await loadCommonMenus()

  return {
    props: {
      recommended: productsMapper(data.recommended),
      products: productsMapper(data.livros),
      filters: filterMapper({ categories: data.categorias }),
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
