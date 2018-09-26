import React, {Component} from 'react';

import Product from './Product';

export default class Menu extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      debug_iterator: 930,
      products: props.products
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
      <li className="retail-menu__item">
        <h3 className="retail-menu__title">{ this.state.title }</h3>
        <span className="retail-menu__controls">
          <button onClick={ this.addProduct }>Add Product</button>
        </span>
        <ul className="retail-menu__products">
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
      </li>
    )
  }
}