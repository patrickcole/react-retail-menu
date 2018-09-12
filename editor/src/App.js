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
        description: "Best served after your meal",
        is_category: true,
        items: [
          { title: "Chocolate", price: "2.29", description: "The classic chocolate that you've grown to love!"},
          { title: "Vanilla", price: "2.49", description: "Served cold and sweet." },
          { title: "Strawberry", price: "2.99" },
          { 
            title: "Ice Cream",
            items: [
              { title: "Sherbert", price: "1.99" },
              { title: "Peanut Butter", price: "1.39" }
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
        <RetailMenuCategory 
          title={ this.state.menu.title } 
          is_category={ this.state.menu.is_category } 
          description= { this.state.menu.description }
          items={ this.state.menu.items } />
      </div>
    );
  }
}

export default App;
