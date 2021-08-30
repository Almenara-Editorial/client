import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
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
  }
`
