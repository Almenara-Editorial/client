import { gql } from '@apollo/client'
import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from '../fragments'

export const QUERY_BLOG = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}

  query QueryBlog {
    cabecalho {
      ...Header
    }

    posts {
      id
      title
      cover {
        url
      }
      content
    }

    rodape {
      ...Footer
    }
  }
`
