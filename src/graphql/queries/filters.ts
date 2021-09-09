import { gql } from '@apollo/client'

export const QUERY_FILTERS = gql`
  query QueryFilters {
    categorias {
      name
      slug
    }
  }
`
