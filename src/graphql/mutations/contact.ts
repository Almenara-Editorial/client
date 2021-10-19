import { gql } from '@apollo/client'

export const MUTATION_CONTACT = gql`
  mutation MutationContact($input: createContactInput!) {
    createContact(input: $input) {
      contact {
        created_at
      }
    }
  }
`
