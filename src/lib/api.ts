import { v4 } from 'uuid'

import { apolloClient } from './apollo'
import { LoginMutation } from './mutation/auth'

interface LoginUser {
  username: string
  password: string
}

export const loginUser = async ({ username, password }: LoginUser) => {
  const result = await apolloClient.query({
    query: LoginMutation,
    variables: {
      input: {
        clientMutationId: v4(), // Generate a unique id
        username: username || '',
        password: password || ''
      }
    }
  })

  return result.data || {}
  // return {}
}
