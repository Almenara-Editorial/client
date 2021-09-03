import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { QueryBooks, QueryBooksVariables } from '../generated/QueryBooks'

export const QUERY_BOOKS = gql`
  query QueryBooks($limit: Int, $start: Int, $where: JSON, $sort: String) {
    livros(limit: $limit, start: $start, where: $where, sort: $sort) {
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
      particulars
      description
      image {
        src: url
        label: alternativeText
      }
    }
  }
`

export function useQueryProducs(options?: QueryHookOptions<QueryBooks, QueryBooksVariables>) {
  return useQuery<QueryBooks, QueryBooksVariables>(QUERY_BOOKS, options)
}
