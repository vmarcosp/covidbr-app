import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import ReactGA from 'react-ga'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.GA_KEY || 'UA-000000-01')
  ReactGA.pageview(window.location.pathname + window.location.search)
}
