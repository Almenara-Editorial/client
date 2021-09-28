import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'

import GlobalStyles from '@/styles/global'
import { useApollo } from '@/utils/apollo'
import { Layout } from '@/components/layout'
import { CheckoutLayout } from '@/components/checkout'
import { CartProvider } from '@/contexts'
import { Provider } from 'next-auth/client'

import '@/styles/react-slick.css'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps?.initialApolloState)
  const { pathname } = useRouter()

  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <CartProvider>
          <Head>
            <title>Loja Almenara Editorial</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
          </Head>
          <Script
            strategy="beforeInteractive"
            src={`https://sdk.mercadopago.com/js/v2`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.mp = new MercadoPago('YOUR_PUBLIC_KEY')`
            }}
          />
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
