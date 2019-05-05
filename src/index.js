import React from 'react'
import ReactDOM from 'react-dom'

// components
import App from './components/app'

// context services
import { ServicesProvider } from './components/services-context'

// services
import Services from './services'

// style
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

// init services
const services = new Services()

ReactDOM.render(
  <ServicesProvider value={services}>
    <App />
  </ServicesProvider>

  , document.getElementById('root'))
