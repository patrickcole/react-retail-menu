import React, {Component} from 'react';

import RetailMenuCategory from './RetailMenuCategory';

export default class RetailMenuItem extends Component {

  buildItem() {

    let itemSubItems;
    let itemCategoryTitle;
    let itemPrice;
    let itemDescription;

    if ( this.props.item.is_category ){

      itemCategoryTitle = this.props.item.title;
    }

    if ( this.props.item.items ){

      itemSubItems = <RetailMenuCategory title={ itemCategoryTitle } items={ this.props.item.items } />
    }

    if ( this.props.item.description ){

      itemDescription = <p>{ this.props.item.description }</p>
    }

    if ( this.props.item.price ){

      itemPrice = <span className="retail-menu-price">{ this.props.item.price }</span>;
    }

    return (
      <li className="retail-menu-item">
        <span className="retail-menu-title">{ this.props.item.title }</span>
        { itemPrice }
        { itemDescription }
        { itemSubItems }
      </li>
    ) 
  }

  render(){
    return this.buildItem();
  }
}