import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from '@/styles/global'
import { useApollo } from '@/utils/apollo'
import { Layout } from '@/components/layout'
import { CheckoutLayout } from '@/components/checkout'
import { CartProvider } from '@/contexts'
import { Provider } from 'next-auth/client'

import '@/styles/react-slick.css'
import { MercadoPago } from '@/components/shared'
import { colors } from '@/styles/colors'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps?.initialApolloState)
  const { pathname } = useRouter()

  return (
    <ApolloProvider client={client}>
      <NextNprogress
        color={colors['blue-500']}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Provider session={pageProps.session}>
        <CartProvider>
          <Head>
            <title>Almenara Editorial - Loja</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
          </Head>
          <MercadoPago />
          {pathname !== '/checkout' ? (
            <Layout footer={pageProps.footer}>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <CheckoutLayout>
              <Component {...pageProps} />
            </CheckoutLayout>
          )}

          <GlobalStyles />
        </CartProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default App
