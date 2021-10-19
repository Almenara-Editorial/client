import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_COMMON = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}

  query QueryCommon {
    cabecalho {
      ...Header
    }

    rodape {
      ...Footer
    }
  }
`
