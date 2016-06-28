import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductById } from '../reducers'
import CartItem from '../components/CartItem'
import * as actions from '../actions'

class CartContainer extends Component{
  render(){
    const { items, actions } = this.props
    return(
      <div>
        <h2>Cart</h2>
        <ul>
        {
          items.map(item => <CartItem key={item.id} item={item} />)
        }
        </ul>
        <button disabled={items.length === 0} onClick={actions.checkoutRequest}>Checkout</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    items: state.cart.items.map(item => Object.assign({}, getProductById(state.products.productsById, item), {
      quantity: state.cart.quantity[item]
    }))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
