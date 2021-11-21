import { gql } from '@apollo/client'

export const QUERY_USER = gql`
  query QueryUser {
    me {
      fullName
      documentNumber
      email
    }
  }
`
