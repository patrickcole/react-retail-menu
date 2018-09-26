import React, {Component} from 'react';

import Product from './Product';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          title: "Chocolate Cake",
          description: "Mmmm delicious!",
          price: "2.49"
        },
        {
          title: "Vanilla Cake",
          description: "Mmmm delicious!",
          price: "2.49"
        }
      ]
    }
  }
  render() {
    return (
      <ul>
        { this.state.products.map( (product, index) => {

          return (
            <Product 
              key={`product${index}`}
              title={product.title} 
              description={product.description} 
              price={product.price} 
            />
          )
        })}
      </ul>
    )
  }
}