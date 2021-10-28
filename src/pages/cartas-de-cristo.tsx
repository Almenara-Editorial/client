import { GetServerSideProps } from 'next'

import { QUERY_CARTAS } from '@/graphql/queries'

import {
  CartasDeCristoTemplate,
  CartasDeCristoTemplateProps
} from '@/components/templates'
import {
  commonDataMapper,
  getImageUrl,
  initializeApollo,
  productsMapper
} from '@/utils'
import {
  QueryCartas,
  QueryCartas_cartasDeCristo_books_books
} from '@/graphql/generated/QueryCartas'

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
      downloadItems: data.downloads?.map((item) => ({
        title: item?.name,
        file: getImageUrl(item?.file[0]?.url)
      })),
      books:
        productsMapper(
          data.cartasDeCristo?.books
            ?.books as QueryCartas_cartasDeCristo_books_books[]
        ) || [],
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
