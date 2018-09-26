import React, {Component} from 'react';

import Input from './Input';

export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      price: this.props.price
    }
  }

  updateProduct = (prop, value) => {

    this.setState( { [prop] : value })
  }

  render() {
    return (
      <li>
        <Input type="title" onInputUpdate={ this.updateProduct } value={ this.state.title } />
        <Input type="description" onInputUpdate={ this.updateProduct } value={ this.state.description } />
        <Input type="price" onInputUpdate={ this.updateProduct } value={ this.state.price } />
      </li>
    )
  }
}