import { gql } from '@apollo/client'

export const QUERY_BLOG = gql`
  query QueryBlog {
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
  }
`

export const QUERY_POST = gql`
  query QueryPostBySlug($slug: String) {
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
  }
`
