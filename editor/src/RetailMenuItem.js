import React, {Component} from 'react';
import RetailMenuCategory from './RetailMenuCategory';

export default class RetailMenuItem extends Component {

  buildTags(tags) {

    if ( tags ){

      return tags.map( (item, index) => <span className="retail-menu__tag" key={index}>{item.tag}</span>)
    } else {

      return;
    }
  }

  buildItem() {

    let itemSubItems;
    let itemPrice;
    let itemDescription;

    if ( this.props.item.description ) {

      itemDescription = <p>{ this.props.item.description }</p>
    }

    if ( this.props.item.items ) {

      itemSubItems = <RetailMenuCategory menu={ this.props.item } />
    }

    if ( this.props.item.price ) {

      itemPrice = <span className="retail-menu__price">{ this.props.item.price }</span>;
    }

    return (
      <li className="retail-menu__item">
        <span className="retail-menu__title">{ this.props.item.title }</span>
        { itemPrice }
        { itemDescription }
        { this.buildTags( this.props.item.tags ) }
        { itemSubItems }
      </li>
    );
  }

  render(){
    return this.buildItem();
  }
}