import { GetStaticPaths, GetStaticProps } from 'next'

import {
  GenericPageTemplate,
  GenericPageTemplateProps
} from '@/components/templates'
import { initializeApollo } from '@/utils'
import { QUERY_PAGE } from '@/graphql/queries/page'
import { QueryPage, QueryPageVariables } from '@/graphql/generated/QueryPage'
import Head from 'next/head'
import { loadCommonMenus } from '@/services'

type GenericPageProps = GenericPageTemplateProps

export default function GenericPage({ page }: GenericPageProps) {
  return (
    <>
      <Head>
        <title>Almenara Editorial - {page?.name}</title>
      </Head>
      <GenericPageTemplate page={page} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [] as string[]

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo()
  const path = context.params?.path
  const commonMenus = await loadCommonMenus()

  const { data } = await apolloClient.query<QueryPage, QueryPageVariables>({
    query: QUERY_PAGE,
    variables: {
      where: {
        path
      }
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      page: data.pages[0] || null,
      ...commonMenus
    },
    notFound: !data.pages[0],
    revalidate: 10
  }
}
