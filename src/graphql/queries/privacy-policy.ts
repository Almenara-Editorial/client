import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_PRIVACY_POLICY = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}

  query QueryPrivacyPolicy {
    cabecalho {
      ...Header
    }
    privacyPolicy {
      content
    }
    rodape {
      ...Footer
    }
  }
`
