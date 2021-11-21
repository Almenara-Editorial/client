import { gql } from '@apollo/client'

export const QUERY_PAGE = gql`
  query QueryPage($where: JSON) {
    pages(where: $where) {
      name
      content
    }
  }
`
