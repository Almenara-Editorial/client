import { PostTemplate, PostTemplateProps } from '@/components/templates'
import {
  QueryPostBySlug,
  QueryPostBySlugVariables
} from '@/graphql/generated/QueryPostBySlug'
import { QUERY_POST } from '@/graphql/queries'
import { loadCommonMenus } from '@/services'
import { initializeApollo } from '@/utils'
import { postMapper } from '@/utils/mappers'
import { GetStaticPaths, GetStaticProps } from 'next'

type PostProps = PostTemplateProps

export default function Post({ post }: PostProps) {
  return <PostTemplate post={post} />
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
    QueryPostBySlug,
    QueryPostBySlugVariables
  >({
    query: QUERY_POST,
    variables: {
      slug: slug.toString()
    }
  })
  const commonMenus = await loadCommonMenus()

  return {
    revalidate: 10,
    props: {
      post: postMapper(data.posts[0]),
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
