import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.0.49:3333/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        keyFields: [],
      },
    },
  }),
});

export default client;
