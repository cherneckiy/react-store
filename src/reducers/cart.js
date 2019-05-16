import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_REMOVE_FROM_CART
} from '../types'

import {
  removeItem,
  updateItem
} from '../helpers'

const newProduct = (product, productInCart = {}, quantity) => {
  const {
    id = product.id,
    title = product.title,
    count = 0,
    total = 0
  } = productInCart

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
    return productsInCart.filter(removeItem(productNew.id))
  }

  if (hasProduct) {
    return productsInCart.map(updateItem(productNew))
  }

  return [...productsInCart, productNew]
}

const getLocalStorage = (name) => JSON.parse(window.localStorage.getItem(name))

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

const updateCart = (state, action) => {
  const productsInCart = getLocalStorage('productsInCart')
  const totalInCart = getLocalStorage('totalInCart')

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
        total: getLocalStorage('totalInCart')
      }
    case REMOVE_FROM_CART:
      return {
        ...state.cart,
        productsInCart: updateProductsInCart(state, action.payload, -1),
        total: getLocalStorage('totalInCart')
      }
    case ALL_REMOVE_FROM_CART:
      const { count } = state.cart.productsInCart.find(product => product.id === action.payload)

      return {
        ...state.cart,
        productsInCart: updateProductsInCart(state, action.payload, -count),
        total: getLocalStorage('totalInCart')
      }
    default:
      return state.cart
  }
}
export default updateCart
