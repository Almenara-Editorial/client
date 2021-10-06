import { gql } from '@apollo/client'

export const HEADER_FRAGMENT = gql`
  fragment Header on Cabecalho {
    links {
      name
      url
    }
  }
`
