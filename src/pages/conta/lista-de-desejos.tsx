import { GetServerSideProps } from 'next'

import { QUERY_COMMON } from '@/graphql/queries'

import { WishlistTemplate, WishlistTemplateProps } from '@/components/templates'
import { commonDataMapper, initializeApollo, productsMapper } from '@/utils'
import { QUERY_WISHLIST } from '@/graphql/queries/wishlist'
import { QueryWishlist } from '@/graphql/generated/QueryWishlist'
import { QueryCommon } from '@/graphql/generated/QueryCommon'
import { protectedRoutes } from '@/utils/protectedRoutes'

type WishlistProps = WishlistTemplateProps

export default function Wishlist({ products }: WishlistProps) {
  return <WishlistTemplate products={products} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo()
  const session = await protectedRoutes(ctx)

  const { data } = await apolloClient.query<QueryWishlist>({
    query: QUERY_WISHLIST,
    context: { session },
    variables: {
      identifier: session?.user?.email
    }
  })

  const { data: commonData } = await apolloClient.query<QueryCommon>({
    query: QUERY_COMMON
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      products: productsMapper(data.wishlists[0]?.books),
      ...commonDataMapper({
        header: commonData.cabecalho,
        footer: commonData.rodape
      })
    }
  }
}
