import { GetServerSideProps } from 'next'

import { QUERY_CARTAS } from '@/graphql/queries'

import {
  CartasDeCristoTemplate,
  CartasDeCristoTemplateProps
} from '@/components/templates'
import { getImageUrl, initializeApollo, productsMapper } from '@/utils'
import {
  QueryCartas,
  QueryCartas_cartasDeCristo_books_books
} from '@/graphql/generated/QueryCartas'
import { loadCommonMenus } from '@/services'

type CartasDeCristoProps = CartasDeCristoTemplateProps

export default function CartasDeCristo(props: CartasDeCristoProps) {
  return <CartasDeCristoTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryCartas>({
    query: QUERY_CARTAS
  })
  const commonMenus = await loadCommonMenus()

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
      ...commonMenus
    }
  }
}
