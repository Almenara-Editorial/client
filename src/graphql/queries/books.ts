import { gql } from '@apollo/client'

export const QUERY_BOOKS = gql`
  query QueryBooks($limit: Int) {
    livros(limit: $limit) {
      id
      name
      slug
      price
      image {
        src: url
        formats
      }
    }
  }
`
export const QUERY_BOOK = gql`
  query QueryBookBySlug($slug: String) {
    livros(where: { slug: $slug }) {
      id
      name
      slug
      price
      stock
      description
      image {
        src: url
        label: alternativeText
      }
    }
  }
`
