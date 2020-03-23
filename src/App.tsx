import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Home } from './pages/home'

import 'leaflet/dist/leaflet.css'
console.log(process.env.API_URL)

const client = new ApolloClient({
  uri: process.env.API_URL
});

export const App = () => (
  <ApolloProvider client={client}>
    <div style={{ height: '100%', width: '100% ' }}>
      <Home />
    </div>
  </ApolloProvider>
)
