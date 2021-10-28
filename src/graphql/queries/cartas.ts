import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, BOOK_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_CARTAS = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}
  ${BOOK_FRAGMENT}

  query QueryCartas {
    cabecalho {
      ...Header
    }

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

    rodape {
      ...Footer
    }
  }
`
