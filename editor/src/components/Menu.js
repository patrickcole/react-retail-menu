import React, {Component} from 'react';

import Product from './Product';

export default class Menu extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      debug_iterator: 930,
      expanded: false,
      products: props.products
    }
  }

  addProduct = (e) => {

    this.setState({ 
      expanded: true,
      debug_iterator: this.state.debug_iterator + 1 },
      () => {
        let product = { id: `product${this.state.debug_iterator}`, title: 'New Product', description: '', price: '0.00' };
        this.setState( { products: [...this.state.products, product] } );
      });
  }

  deleteProduct = (id) => {

    this.setState( { products: this.state.products.filter( product => product.id !== id ) } );
  }

  updateProduct = (id, state) => {

    let newProducts = this.state.products.map( product => {

      if ( product.id === id ){

        return Object.assign({}, product, state);
      }
      return product;
    });

    this.setState({ products: newProducts });
  }

  toggleExpand = (e) => {

    this.setState( { expanded: !this.state.expanded } );
  }

  render() {
    return (
      <li className="retail-menu__item">
        <span className="retail-menu__header">
          <h3 className="retail-menu__title">{ this.state.title }</h3>
          <span className="retail-menu__controls">
            <button className="retail-menu__button retail-menu__button--primary" onClick={ this.addProduct }>Add Product</button>
            <button className="retail-menu__button retail-menu__button--primary" onClick={ this.toggleExpand }>{ this.state.expanded ? 'Hide' : 'Show' }</button>
          </span>
        </span>
        <div className={ this.state.expanded ? 'retail-menu__contents' : 'retail-menu__contents retail-menu__contents--closed' }>
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
                onProductUpdate={this.updateProduct}
              />
            )
          })}
        </ul>

          {
            /*
            <h3>Debug Area</h3>
          <textarea readOnly className="retail-menu__debug" value={ JSON.stringify( this.state.products, null, 2) }></textarea>
            */
          }
        </div>
      </li>
    )
  }
}