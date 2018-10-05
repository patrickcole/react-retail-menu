import React, { Component } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialMenu from './components/material-ui/MaterialMenu';

import { storeProducts } from './static/products';

class App extends Component {

  render() {
    return (
      <main>
        <CssBaseline />
        <ul className="retail-menu">
          {
            storeProducts.menus.map( menu => {

              return <MaterialMenu title={menu.title} products={menu.products} />
            })
          }
        </ul>
      </main>
      
    );
  }
}

export default App;
