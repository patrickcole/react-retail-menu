import React, {Component} from 'react';
import RetailMenuItem from './RetailMenuItem';

export default class RetailMenuCategory extends Component {

  buildItems() {

    return this.props.menu.items.map( (item, index) => <RetailMenuItem key={index} item={item} /> );
  }

  render(){

    let categoryDescription;

    if ( this.props.menu.description ) {

      categoryDescription = <p className="retail-menu__description retail-menu__description--category">{ this.props.menu.description }</p>;
    }

    if ( this.props.menu.is_category ){

      return (
        <div className="retail-menu">
          <h3 className="retail-menu__category">{ this.props.menu.title }</h3>
          { categoryDescription }
          <ul className="retail-menu__items">
            { this.buildItems() }
          </ul>
        </div>
      )
    } else {

      return (
        <ul className="retail-menu__items">
          { this.buildItems() }
        </ul>
      )
    }
  }
}