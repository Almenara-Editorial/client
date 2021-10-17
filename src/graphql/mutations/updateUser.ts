import { gql } from '@apollo/client'

export const MUTATION_UPDATE_USER = gql`
  mutation MutationUpdateUser($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        id
      }
    }
  }
`
