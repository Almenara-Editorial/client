import { ProductTemplate, ProductTemplateProps } from '@/components/templates'
import { QueryBookBySlug, QueryBookBySlugVariables } from '@/graphql/generated/QueryBookBySlug'
import { QUERY_BOOK } from '@/graphql/queries'
import { initializeApollo } from '@/utils'
import { productMapper } from '@/utils/mappers'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

type ProductProps = ProductTemplateProps

export default function Product({ product }: ProductProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Carregando</div>
  }

  return <ProductTemplate product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [] as string[]

  return { paths, fallback: true }
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
      product: productMapper(data.livros)
    }
  }
}
