import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT } from '../fragments'

export const QUERY_HOME = gql`
  ${FOOTER_FRAGMENT}

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
          id
          name
          slug
          price
          image {
            url
            formats
          }
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
