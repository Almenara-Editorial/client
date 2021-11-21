import { gql } from '@apollo/client'
import { BOOK_FRAGMENT } from '../fragments'

export const QUERY_ORDERS = gql`
  ${BOOK_FRAGMENT}

  query QueryOrders($limit: Int, $start: Int, $where: JSON, $sort: String) {
    orders(limit: $limit, start: $start, where: $where, sort: $sort) {
      id
      books {
        book {
          ...Book
        }
        price
        quantity
      }
      status {
        name
      }
      payment {
        total
        documentUrl
      }
      created_at
    }
  }
`
