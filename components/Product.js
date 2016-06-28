import React, {Component} from 'react'

export default class Product extends Component{
  render(){
    const {id, title, price, inventory} = this.props.product
    return(
      <li>
        <p>{"Id: " + id + " Name: " + title + " Price: " + price + " "}
        <button disabled={inventory > 0 ? false : true} onClick={this.props.handleClick}>Add to cart</button></p>
      </li>
    )
  }
}
