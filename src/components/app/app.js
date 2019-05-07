import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'

// components
import HeaderApp from '../header-app'
import HomePage from '../pages/catalog-page'
import CartPage from '../pages/cart-page'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <HeaderApp />
          <div className='container'>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/cart' component={CartPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
