import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../types'

const updateProducts = (state, action) => {
  if (state === undefined) {
    return {
      products: [],
      loading: true
    }
  }

  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state.products,
        products: [],
        loading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state.products,
        products: action.payload,
        loading: false
      }
    default:
      return state.products
  }
}
export default updateProducts
