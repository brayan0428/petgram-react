import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloCliente from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider } from './Context'

const client = new ApolloCliente({
  uri: 'https://petgram-server-brayan-ex7ilvi6o.vercel.app/graphql'
})

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  , document.getElementById('app'))
