import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RetailMenuCategory from './RetailMenuCategory';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      menu: {
        title: "Desserts",
        is_category: true,
        items: [
          { title: "Chocolate", price: "2.29" },
          { title: "Vanilla", price: "2.49" },
          { title: "Strawberry", price: "2.99" },
          { 
            title: "Ice Cream",
            items: [
              { title: "Sherbert", price: "1.99" }
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Retail Menu</h1>
        </header>
        <RetailMenuCategory title={ this.state.menu.title } is_category={ this.state.menu.is_category } items={ this.state.menu.items } />
      </div>
    );
  }
}

export default App;
