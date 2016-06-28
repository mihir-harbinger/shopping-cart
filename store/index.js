import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const middleware = [
    thunkMiddleware,
    loggerMiddleware()
  ]

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
  return store
}

export default configureStore
