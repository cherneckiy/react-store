import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_REMOVE_FROM_CART } from '../types'

const newProduct = (product, productInCart = {}, quantity) => {
  const { id = product.id, title = product.title, count = 0, total = 0 } = productInCart
  return {
    id,
    title,
    price: product.price,
    total: total + product.price * quantity,
    count: count + quantity
  }
}

const updateProducts = (productsInCart, productNew) => {
  const hasProduct = productsInCart.some(product => product.id === productNew.id)

  if (productNew.count === 0) {
    return productsInCart.filter(product => product.id !== productNew.id)
  }

  if (hasProduct) {
    return productsInCart.map(item => {
      if (item.id === productNew.id) {
        return productNew
      }
      return item
    })
  }

  return [...productsInCart, productNew]
}

const saveLocaleStorage = (name, value) => {
  window.localStorage.removeItem(name)
  window.localStorage.setItem(name, JSON.stringify(value))
}

const updateProductsInCart = (state, newProductId, quantity) => {
  const { cart: { productsInCart }, products: { products } } = state
  const product = products.find(product => product.id === newProductId)
  const productInCart = productsInCart.find(product => product.id === newProductId)
  const productNew = newProduct(product, productInCart, quantity)
  const newProducts = updateProducts(productsInCart, productNew, product)
  saveLocaleStorage('productsInCart', newProducts)
  saveLocaleStorage('totalInCart', allTotal(newProducts))
  return newProducts
}

const allTotal = (arr) => {
  return arr.reduce((acc, item) => acc + item.total, 0)
}

const getTotal = () => {
  return JSON.parse(window.localStorage.getItem('totalInCart'))
}

const updateCart = (state, action) => {
  const productsInCart = JSON.parse(window.localStorage.getItem('productsInCart'))
  const totalInCart = JSON.parse(window.localStorage.getItem('totalInCart'))

  if (state === undefined) {
    return {
      productsInCart: productsInCart !== null ? productsInCart : [],
      total: totalInCart !== null ? totalInCart : 0
    }
  }

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state.cart,
        productsInCart: updateProductsInCart(state, action.payload, 1),
        total: getTotal()
      }
    case REMOVE_FROM_CART:
      return {
        ...state.cart,
        productsInCart: updateProductsInCart(state, action.payload, -1),
        total: getTotal()
      }
    case ALL_REMOVE_FROM_CART:
      const { count } = state.cart.productsInCart.find(product => product.id === action.payload)

      return {
        ...state.cart,
        productsInCart: updateProductsInCart(state, action.payload, -count),
        total: getTotal()
      }
    default:
      return state.cart
  }
}
export default updateCart
