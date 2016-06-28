import { combineReducers } from 'redux'
import * as types from '../constants'

const initialState = {
  quantity: {},
  items: []
}

const items = (state = initialState.items, action) => {
  switch(action.type){
    case types.ADD_TO_CART:
      const { productId } = action
      console.log(productId)
      if(state.indexOf(productId) === -1){
        return [
          ...state,
          productId
        ]
      }
      return state
    default:
      return state
  }
}

const quantity = (state = initialState.quantity, action) => {
  switch(action.type){
    case types.ADD_TO_CART:
      const { productId } = action
      return Object.assign({}, state, {
        [productId]: (state[productId] || 0) + 1
      })
    default:
      return state
  }
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case types.CHECKOUT_REQUEST:
    case types.CHECKOUT_SUCCESS:
      return initialState
    default:
      return{
        quantity: quantity(state.quantity, action),
        items: items(state.items, action)
      }
  }
}

export default cartReducer
