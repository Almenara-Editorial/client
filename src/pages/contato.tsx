import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { QUERY_COMMON } from '@/graphql/queries'

import { commonDataMapper, initializeApollo } from '@/utils'
import { QueryCommon } from '@/graphql/generated/QueryCommon'
import { ContactTemplate } from '@/components/templates'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Almenara Editorial - Contato</title>
      </Head>
      <ContactTemplate />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryCommon>({
    query: QUERY_COMMON
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
