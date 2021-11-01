import { gql } from '@apollo/client'

export const BOOK_FRAGMENT = gql`
  fragment Book on Livro {
    id
    name
    slug
    price
    stock
    promoPrice
    authors {
      name
    }
    image {
      src: url
      formats
    }
    disccounts {
      minQuantity
      percentage
    }
  }
`
