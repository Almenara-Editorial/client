import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_TERMS_OF_USE = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}

  query QueryTermsOfUse {
    cabecalho {
      ...Header
    }
    termsOfUse {
      content
    }
    rodape {
      ...Footer
    }
  }
`
