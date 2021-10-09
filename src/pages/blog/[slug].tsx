// QUERY_POST

import { PostTemplate, PostTemplateProps } from '@/components/templates'
import {
  QueryPostBySlug,
  QueryPostBySlugVariables
} from '@/graphql/generated/QueryPostBySlug'
import { QUERY_BOOK, QUERY_POST } from '@/graphql/queries'
import { initializeApollo } from '@/utils'
import { commonDataMapper, postMapper } from '@/utils/mappers'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

type PostProps = PostTemplateProps

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Almenara Editorial</title>
      </Head>
      <PostTemplate post={post} />
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
    QueryPostBySlug,
    QueryPostBySlugVariables
  >({
    query: QUERY_POST,
    variables: {
      slug: slug.toString()
    }
  })

  return {
    revalidate: 60,
    props: {
      post: postMapper(data.posts[0]),
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
