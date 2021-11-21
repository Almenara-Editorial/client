import { gql } from '@apollo/client'
import { BOOK_FRAGMENT } from '../fragments'

export const QUERY_CARTAS = gql`
  ${BOOK_FRAGMENT}

  query QueryCartas {
    cartasDeCristo {
      quote
      books {
        books {
          ...Book
        }
      }
    }

    downloads {
      id
      name
      file {
        url
      }
    }
  }
`
