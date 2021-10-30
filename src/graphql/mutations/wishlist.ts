import { gql } from '@apollo/client'
import { BOOK_FRAGMENT } from '../fragments'

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: createWishlistInput!) {
    createWishlist(input: $input) {
      wishlist {
        id
        books {
          ...Book
        }
      }
    }
  }
  ${BOOK_FRAGMENT}
`

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: updateWishlistInput!) {
    updateWishlist(input: $input) {
      wishlist {
        id
        books {
          ...Book
        }
      }
    }
  }
  ${BOOK_FRAGMENT}
`
