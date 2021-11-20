import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_PAGE = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}

  query QueryPage($where: JSON) {
    cabecalho {
      ...Header
    }
    pages(where: $where) {
      name
      content
    }
    rodape {
      ...Footer
    }
  }
`
