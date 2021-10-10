import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_ORDERS = gql`
  ${FOOTER_FRAGMENT}
  ${HEADER_FRAGMENT}

  query QueryOrders($limit: Int, $start: Int, $where: JSON, $sort: String) {
    cabecalho {
      ...Header
    }
    orders(limit: $limit, start: $start, where: $where, sort: $sort) {
      id
      books {
        book {
          slug
        }
      }
      status
      total
      created_at
    }
    rodape {
      ...Footer
    }
  }
`
