import { GetServerSideProps } from 'next'

import { WishlistTemplate, WishlistTemplateProps } from '@/components/templates'
import { initializeApollo, productsMapper } from '@/utils'
import { QUERY_WISHLIST } from '@/graphql/queries/wishlist'
import { QueryWishlist } from '@/graphql/generated/QueryWishlist'
import { protectedRoutes } from '@/utils/protectedRoutes'
import { loadCommonMenus } from '@/services'

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
  const commonMenus = await loadCommonMenus()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      products: productsMapper(data.wishlists[0]?.books),
      ...commonMenus
    }
  }
}
