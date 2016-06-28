import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import { fetchProducts } from './actions'
import App from './containers/App'

const store = configureStore()
store.dispatch(fetchProducts())

const ROOT = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
)
