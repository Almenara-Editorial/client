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
      slug
      cover {
        url
      }
      excerpt
      created_at
      user {
        firstname
        lastname
      }
    }

    rodape {
      ...Footer
    }
  }
`

export const QUERY_POST = gql`
  ${HEADER_FRAGMENT}
  ${FOOTER_FRAGMENT}
  query QueryPostBySlug($slug: String) {
    cabecalho {
      ...Header
    }
    posts(where: { slug: $slug }) {
      id
      title
      slug
      cover {
        url
      }
      excerpt
      content
      created_at
      user {
        firstname
        lastname
      }
    }
    rodape {
      ...Footer
    }
  }
`
