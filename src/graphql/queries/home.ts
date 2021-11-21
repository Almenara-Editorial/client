import { gql } from '@apollo/client'
import { BOOK_FRAGMENT } from '../fragments'

export const QUERY_HOME = gql`
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
  }
`
