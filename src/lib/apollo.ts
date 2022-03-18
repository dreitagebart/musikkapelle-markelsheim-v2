import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.WP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})
