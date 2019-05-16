import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { ServicesProvider } from './components/services-context'
import Services from './services'
const services = new Services()

ReactDOM.render(
  <ServicesProvider value={services}>
    <App />
  </ServicesProvider>

  , document.getElementById('root'))
