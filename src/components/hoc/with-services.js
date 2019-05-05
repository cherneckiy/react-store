import React from 'react'
import { ServicesConsumer } from '../services-context'

const WithServices = () => (Wrapped) => {
  return (props) => {
    return (
      <ServicesConsumer>
        {
          (services) => {
            return <Wrapped {...props} services={services} />
          }
        }
      </ServicesConsumer>
    )
  }
}
export default WithServices
