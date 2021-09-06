import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, BOOK_FRAGMENT } from '../fragments'

export const QUERY_HOME = gql`
  ${FOOTER_FRAGMENT}
  ${BOOK_FRAGMENT}

  query QueryHome {
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
