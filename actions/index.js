import * as types from '../constants'
import { getProducts } from '../api/shop'

const requestProducts = () => {
  return{
    type: types.REQUEST_PRODUCTS
  }
}
const receiveProducts = products => {
  return {
    type: types.RECEIVE_PRODUCTS,
    products
  }
}

export const fetchProducts = () => {
  return dispatch => {
    dispatch(requestProducts())
    getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

const addToCartUnsafe = productId => {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export const addToCart = productId => {
  return (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkoutRequest = () => {
  return {
    type: types.CHECKOUT_REQUEST
  }
}
