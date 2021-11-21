import { ProductTemplate, ProductTemplateProps } from '@/components/templates'
import {
  QueryBookBySlug,
  QueryBookBySlugVariables
} from '@/graphql/generated/QueryBookBySlug'
import { QUERY_BOOK } from '@/graphql/queries'
import { loadCommonMenus } from '@/services'
import { initializeApollo } from '@/utils'
import { productMapper } from '@/utils/mappers'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

type ProductProps = ProductTemplateProps

export default function Product({ product }: ProductProps) {
  return (
    <>
      <Head>
        <title>{product.name} - Almenara Editorial</title>
      </Head>
      <ProductTemplate product={product} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [] as string[]

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug

  if (!slug) return { notFound: true }

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryBookBySlug,
    QueryBookBySlugVariables
  >({
    query: QUERY_BOOK,
    variables: {
      slug: slug.toString()
    }
  })
  const commonMenus = await loadCommonMenus()

  return {
    revalidate: 10,
    props: {
      product: productMapper(data.livros),
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
