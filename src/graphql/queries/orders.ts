import { gql } from '@apollo/client'
import { BOOK_FRAGMENT, FOOTER_FRAGMENT } from '../fragments'

export const QUERY_ORDERS = gql`
  ${FOOTER_FRAGMENT}
  ${BOOK_FRAGMENT}

  query QueryOrders($limit: Int, $start: Int, $where: JSON, $sort: String) {
    orders(limit: $limit, start: $start, where: $where, sort: $sort) {
      id
      created_at
      status
      books {
        quantity
        book {
          ...Book
        }
      }
      total
    }
    rodape {
      ...Footer
    }
  }
`
