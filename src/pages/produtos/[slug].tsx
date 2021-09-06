import { ProductTemplate, ProductTemplateProps } from '@/components/templates'
import { QueryBookBySlug, QueryBookBySlugVariables } from '@/graphql/generated/QueryBookBySlug'
import { QUERY_BOOK } from '@/graphql/queries'
import { initializeApollo } from '@/utils'
import { footerMapper, productMapper } from '@/utils/mappers'
import { GetStaticPaths, GetStaticProps } from 'next'

type ProductProps = ProductTemplateProps

export default function Product({ product }: ProductProps) {
  return <ProductTemplate product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [] as string[]

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug

  if (!slug) return { notFound: true }

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryBookBySlug, QueryBookBySlugVariables>({
    query: QUERY_BOOK,
    variables: {
      slug: slug.toString()
    }
  })

  return {
    revalidate: 60,
    props: {
      product: productMapper(data.livros),
      initialApolloState: apolloClient.cache.extract(),
      footer: data.rodape ? footerMapper(data.rodape) : null
    }
  }
}
