import Head from 'next/head'

import { initializeApollo } from '@/utils'
import { ContactTemplate } from '@/components/templates'
import { loadCommonMenus } from '@/services'

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

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const commonMenus = await loadCommonMenus()

  return {
    revalidate: 10,
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
