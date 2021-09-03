import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'

import GlobalStyles from '@/styles/global'
import { useApollo } from '@/utils/apollo'
import { Layout } from '@/components/layout'
import { CartProvider } from '@/contexts'

import '@/styles/react-slick.css'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps?.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <Head>
          <title>React Avançado Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
        </Head>
        <Layout footer={pageProps.footer}>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyles />
      </CartProvider>
    </ApolloProvider>
  )
}

export default App
