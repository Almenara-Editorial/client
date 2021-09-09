import { gql } from '@apollo/client'

export const CATEGORY_FRAGMENT = gql`
  fragment Category on Categorias {
    name
    slug
  }
`
