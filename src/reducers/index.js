import updateProducts from './products'
import updateCart from './cart'

const reducers = (state, action) => {
  return {
    products: updateProducts(state, action),
    cart: updateCart(state, action)
  }
}

export default reducers
