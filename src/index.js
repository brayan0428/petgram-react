import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloCliente from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider } from './Context'

const client = new ApolloCliente({
  uri: 'https://petgram-server-brayan-ex7ilvi6o.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    console.log(error)
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  , document.getElementById('app'))
