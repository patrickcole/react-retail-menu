import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';

import { storeProducts } from './static/products';

class App extends Component {

  render() {
    return (
      <ul className="retail-menu">
        {
          storeProducts.menus.map( menu => {

            return <Menu title={menu.title} products={menu.products} />
          })
        }
      </ul>
    );
  }
}

export default App;
