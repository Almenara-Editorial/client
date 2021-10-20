import { GetServerSideProps } from 'next'

import { QUERY_CARTAS } from '@/graphql/queries'

import {
  CartasDeCristoTemplate,
  CartasDeCristoTemplateProps
} from '@/components/templates'
import { commonDataMapper, initializeApollo } from '@/utils'
import { QueryCartas } from '@/graphql/generated/QueryCartas'

type CartasDeCristoProps = CartasDeCristoTemplateProps

export default function CartasDeCristo(props: CartasDeCristoProps) {
  return <CartasDeCristoTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryCartas>({
    query: QUERY_CARTAS
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      quote: data.cartasDeCristo?.quote,
      books: data.cartasDeCristo?.books?.books || [],
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
