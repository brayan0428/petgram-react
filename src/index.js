import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloCliente from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloCliente({
  uri: 'https://petgram-server-brayan-ex7ilvi6o.vercel.app/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('app'))
