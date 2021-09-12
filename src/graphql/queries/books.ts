import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { BOOK_FRAGMENT, FOOTER_FRAGMENT, CATEGORY_FRAGMENT } from '../fragments'
import { QueryBooks, QueryBooksVariables } from '../generated/QueryBooks'

export const QUERY_BOOKS = gql`
  ${BOOK_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  ${FOOTER_FRAGMENT}

  query QueryBooks(
    $limit: Int
    $start: Int
    $where: JSON
    $sort: String
    $recommended: JSON
  ) {
    recommended: livros(where: $recommended) {
      ...Book
    }
    livros(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...Book
    }
    rodape {
      ...Footer
    }
    categorias {
      ...Category
    }
  }
`
export const QUERY_BOOK = gql`
  ${FOOTER_FRAGMENT}
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
    rodape {
      ...Footer
    }
  }
`

export function useQueryProducs(
  options?: QueryHookOptions<QueryBooks, QueryBooksVariables>
) {
  return useQuery<QueryBooks, QueryBooksVariables>(QUERY_BOOKS, options)
}
