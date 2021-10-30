import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { BOOK_FRAGMENT } from '../fragments'
import {
  QueryWishlist,
  QueryWishlistVariables
} from '../generated/QueryWishlist'

export const QUERY_WISHLIST = gql`
  ${BOOK_FRAGMENT}
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      books {
        ...Book
      }
    }
  }
`

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlist, QueryWishlistVariables>
) {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options
  )
}
