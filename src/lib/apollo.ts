import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oine9408ys01xk212u5n62/master',
  cache: new InMemoryCache()
})