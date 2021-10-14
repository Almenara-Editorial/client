import { gql } from '@apollo/client'
import { BOOK_FRAGMENT, FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_ORDERS = gql`
  ${FOOTER_FRAGMENT}
  ${HEADER_FRAGMENT}
  ${BOOK_FRAGMENT}

  query QueryOrders($limit: Int, $start: Int, $where: JSON, $sort: String) {
    cabecalho {
      ...Header
    }
    orders(limit: $limit, start: $start, where: $where, sort: $sort) {
      id
      books {
        book {
          ...Book
        }
        price
        quantity
      }
      status
      total
      created_at
      paymentUrl
    }
    rodape {
      ...Footer
    }
  }
`
