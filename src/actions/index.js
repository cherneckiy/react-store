
export const productsLoaded = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
}

export const getProducts = (newProducts) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: newProducts
  }
}

export const addToCart = (newProduct) => {
  return {
    type: 'ADD_TO_CART',
    payload: newProduct
  }
}

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  }
}

export const allRemoveFromCart = (id) => {
  return {
    type: 'ALL_REMOVE_FROM_CART',
    payload: id
  }
}

export const fetchProducts = (services, dispatch) => () => {
  dispatch(productsLoaded())
  services.getProducts()
    .then((res) => dispatch(getProducts(res)))
}
