import { gql } from '@apollo/client'

export const BOOK_FRAGMENT = gql`
  fragment Book on Livro {
    id
    name
    slug
    price
    image {
      src: url
      formats
    }
  }
`
