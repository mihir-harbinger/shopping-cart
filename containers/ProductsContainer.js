import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from '../components/Product'
import { getProductById } from '../reducers'

import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class ProductsContainer extends Component{
  render(){
    const { products, actions, isFetching } = this.props
    const list =
    <ul>
    {
      products.map(product => <Product key={product.id} product={product} handleClick={() => actions.addToCart(product.id)} />)
    }
    </ul>
    return(
      <div>
        <h2>Products</h2>
        {isFetching ? <h3>Loading...</h3> : list}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const mapStateToProps = state => {
  const {isFetching, visibleIds, productsById} = state.products
  return{
    isFetching: isFetching,
    products: visibleIds.map(productId => getProductById(productsById, productId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
