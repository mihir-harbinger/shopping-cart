import React, { Component } from 'react'

export default class CartItem extends Component{
  render(){
    const { title, price, quantity } = this.props.item
    return(
      <li>{ title }: ${ price } x { quantity } = ${ parseFloat(price * quantity).toFixed(2) }</li>
    )
  }
}
