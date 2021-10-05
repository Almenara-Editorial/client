import { gql } from '@apollo/client'

export const BOOK_FRAGMENT = gql`
  fragment Book on Livro {
    id
    name
    slug
    price
    stock
    promoPrice
    image {
      src: url
      formats
    }
  }
`
