import { BlogTemplate, BlogTemplateProps } from '@/components/templates'
import { QueryBlog } from '@/graphql/generated/QueryBlog'
import { QUERY_BLOG } from '@/graphql/queries'
import { initializeApollo } from '@/utils'
import { commonDataMapper } from '@/utils/mappers'
import Head from 'next/head'
import { postsMapper } from '../../utils/mappers/postsMapper'

type BlogProps = BlogTemplateProps

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog - Almenara Editorial</title>
      </Head>
      <BlogTemplate posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryBlog>({
    query: QUERY_BLOG
  })

  return {
    revalidate: 60,
    props: {
      initialApolloState: apolloClient.cache.extract(),
      posts: postsMapper(data.posts),
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
