import React, {Component} from 'react';

import Product from './Product';

export default class Menu extends Component {


  constructor(props) {
    super(props);
    this.state = {
      debug_iterator: 930,
      products: [
        {
          id: "product929",
          title: "Chocolate Cake",
          description: "Mmmm delicious!",
          price: "2.49"
        },
        {
          id: "product930",
          title: "Vanilla Cake",
          description: "Mmmm delicious!",
          price: "2.49"
        }
      ]
    }
  }

  addProduct = (e) => {

    this.setState({ 
      debug_iterator: this.state.debug_iterator + 1 },
      () => {
        let product = { id: `product${this.state.debug_iterator}`, title: 'New Product', description: '', price: '0.00' };
        this.setState( { products: [...this.state.products, product] } );
      });
  }

  deleteProduct = (id) => {

    this.setState( { products: this.state.products.filter( product => product.id !== id ) } );
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.products.map( (product, index) => {

            return (
              <Product 
                key={product.id}
                id={product.id}
                title={product.title} 
                description={product.description} 
                price={product.price}
                onProductDelete={this.deleteProduct}
              />
            )
          })}
        </ul>
        <hr />
        <button onClick={ this.addProduct }>Add Product</button>
      </div>
    )
  }
}