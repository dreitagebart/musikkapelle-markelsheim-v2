import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions
} from '@apollo/client'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const cache = new InMemoryCache({
  resultCaching: false
})

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`
})

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
  defaultOptions
})