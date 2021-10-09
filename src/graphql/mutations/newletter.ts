import { gql } from '@apollo/client'

export const MUTATION_NEWSLETTER = gql`
  mutation MutationNewsletter($input: createNewsletterInput!) {
    createNewsletter(input: $input) {
      newsletter {
        id
      }
    }
  }
`
