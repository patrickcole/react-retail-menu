import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';

import { desserts } from './static/desserts';

class App extends Component {

  render() {
    return (
      <ul className="retail-menu">
        <Menu title={desserts.title} products={desserts.products} />
      </ul>
    );
  }
}

export default App;
