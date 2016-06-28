import { combineReducers } from 'redux'
import * as types from '../constants'

const initialState = {
  isFetching: false,
  productsById: {},
  visibleIds: []
}

const updateInventory = (state, action) => {
  switch(action.type){
    case types.ADD_TO_CART:
      return Object.assign({}, state, {
        inventory: state.inventory - 1
      })
    default:
      return state
  }
}

const isFetching = (state = initialState.isFetching, action) => {
  switch(action.type){
    case types.REQUEST_PRODUCTS:
      return true
    case types.RECEIVE_PRODUCTS:
      return false
    default:
      return state
  }
}

const productsById = (state = initialState.productsById, action) => {
  switch(action.type){
    case types.RECEIVE_PRODUCTS:
      return Object.assign({}, state,
        action.products.reduce((obj, product) =>{
          obj[product.id] = product
          return obj
        }, {})
      )
    case types.ADD_TO_CART:
      return Object.assign({}, state, {
        [action.productId]: updateInventory(state[action.productId], action)
      })
    default:
      return state
  }
}

const visibleIds = (state = initialState.visibleIds, action) => {
  switch(action.type){
    case types.RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

const products = combineReducers({
  isFetching,
  productsById,
  visibleIds
})

export default products
