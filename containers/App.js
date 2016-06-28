import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

export default class App extends Component{
  render(){
    return(
      <div>
        <h1>App Container</h1>
        <hr />
        <ProductsContainer />
        <hr />
        <CartContainer />
      </div>
    )
  }
}
