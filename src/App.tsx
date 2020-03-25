import React from 'react'
import ApolloClient from 'apollo-boost'
import GA from 'react-ga'
import { useMount } from 'react-use'
import { ApolloProvider } from '@apollo/react-hooks'

import { colors } from 'css/theme'
import { GlobalStyles } from 'css/GlobalStyles'

import 'leaflet/dist/leaflet.css'

import { Home } from './pages/home'

export const client = new ApolloClient({
  uri: process.env.API_URL
})

const GA_KEY = process.env.GA_KEY || 'UA-000000-00'

export const App = () => {
  useMount(() => {
    if (process.env.NODE_ENV === 'production') {
      GA.initialize(GA_KEY)
      GA.pageview(window.location.pathname)
    }
  })
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Home />
    </ApolloProvider>
  )
}
