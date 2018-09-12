import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RetailMenuCategory from './RetailMenuCategory';
import RetailMenuTags from './RetailMenuTags';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      menus: [
        {
          title: "Lunch",
          is_category: true,
          items: [
            { title: "Burger", price: "8.29", description: "So good!"},
            { title: "Hot Dogs", price: "5.29", description: "Get 'em hot!"},
          ]
        },
        {
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
                { 
                  title: "Peanut Butter", 
                  price: "1.39", 
                  tags: [
                    { id: "PNUT", description: "Peanut Allergy" }
                  ]
                }
              ]
            }
          ]
        }
      ],
      tags: [
        { id: "PNUT", description: "If you have a peanut allergy, please watch out!" }
      ]
    }
  }

  buildMainMenu( menus ) {

    return menus.map( (entry, index) => <RetailMenuCategory menu={ entry } /> );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Retail Menu</h1>
        </header>
        
        { this.buildMainMenu( this.state.menus ) }

        <RetailMenuTags tags={ this.state.tags } />
      </div>
    );
  }
}

export default App;
