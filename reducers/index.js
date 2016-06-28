import { combineReducers } from 'redux'
import products from './productsReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
  products,
  cart
})

export const getProductById = (state, id) => {
  return state[id]
}

export const getCartItemById = (state, id, quantity) => {
  return Object.assign({}, state, {
    quantity
  })
}

export default rootReducer
