import { gql } from '@apollo/client'

export const QUERY_BOOKS = gql`
  query QueryBooks($limit: Int) {
    livros(limit: $limit) {
      id
      name
      slug
      price
      image {
        url
        formats
      }
    }
  }
`
