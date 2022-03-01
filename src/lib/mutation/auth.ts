import { gql } from '@apollo/client'

export const LoginMutation = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      authToken
      user {
        id
        username
        name
        email
        firstName
        lastName
      }
    }
  }
`
