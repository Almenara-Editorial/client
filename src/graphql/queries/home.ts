import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, BOOK_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_HOME = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}
  ${BOOK_FRAGMENT}

  query QueryHome {
    cabecalho {
      ...Header
    }

    home {
      banner {
        image {
          url
        }
        url
      }
      productGroup {
        id
        title
        livros {
          ...Book
        }
        link {
          name
          url
        }
      }
    }

    rodape {
      ...Footer
    }
  }
`
