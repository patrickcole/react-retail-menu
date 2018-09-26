import React, {Component} from 'react';

import Product from './Product';

export default class Menu extends Component {

  render() {
    return (
      <ul>
        <Product title="Chocolate Cake" description="Mmmmm delicious!" price="2.49" />
      </ul>
    )
  }
}