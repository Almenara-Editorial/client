import { gql } from '@apollo/client'

export const FOOTER_FRAGMENT = gql`
  fragment Footer on Rodape {
    links {
      id
      title
      link {
        id
        name
        url
      }
    }
    social {
      name
      url
    }
  }
`
