import { BlogTemplate, BlogTemplateProps } from '@/components/templates'
import { QueryBlog } from '@/graphql/generated/QueryBlog'
import { QUERY_BLOG } from '@/graphql/queries'
import { loadCommonMenus } from '@/services'
import { initializeApollo } from '@/utils'
import { postsMapper } from '../../utils/mappers/postsMapper'

type BlogProps = BlogTemplateProps

export default function Blog({ posts }: BlogProps) {
  return <BlogTemplate posts={posts} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryBlog>({
    query: QUERY_BLOG
  })
  const commonMenus = await loadCommonMenus()

  return {
    revalidate: 10,
    props: {
      initialApolloState: apolloClient.cache.extract(),
      posts: postsMapper(data.posts),
      ...commonMenus
    }
  }
}
