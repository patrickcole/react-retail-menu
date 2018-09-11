import React, {Component} from 'react';

import RetailMenuCategory from './RetailMenuCategory';

export default class RetailMenuItem extends Component {

  checkItem() {

    let itemSubItems;
    let itemCategoryTitle;

    if ( this.props.item.is_category ){

      itemCategoryTitle = this.props.item.title;
    }

    if ( this.props.item.items ){

      itemSubItems = <RetailMenuCategory title={ itemCategoryTitle } items={ this.props.item.items } />
    }

    return (
      <li className="retail-menu-item">
        <span className="retail-menu-title">{ this.props.item.title }</span>
        <span className="retail-menu-price">{ this.props.item.price }</span>
        { itemSubItems }
      </li>
    ) 
  }

  render(){
    return this.checkItem();
  }
}