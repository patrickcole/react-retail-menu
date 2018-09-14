import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuList from './MenuList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Retail Menu Editor</h1>
        </header>
        <MenuList />
      </div>
    );
  }
}

export default App;
