import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Home } from './pages/home'

import 'leaflet/dist/leaflet.css'
import { GlobalStyles } from 'css/GlobalStyle'

const client = new ApolloClient({
  uri: process.env.API_URL
});

export const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Home />
  </ApolloProvider>
)
