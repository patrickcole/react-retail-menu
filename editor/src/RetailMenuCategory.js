import React, {Component} from 'react';
import RetailMenuItem from './RetailMenuItem';

export default class RetailMenuCategory extends Component {

  buildItems() {
    return this.props.items.map( (item, index) => (
      <RetailMenuItem key={index} item={item} />
    ));
  }

  render(){

    if ( this.props.is_category ){

      return (
        <div>
          <h3 className="retail-menu-category">{ this.props.title }</h3>
          <ul className="retail-menu-items">
            { this.buildItems() }
          </ul>
        </div>
      )
    } else {

      return (
        <ul className="retail-menu-items">
          { this.buildItems() }
        </ul>
      )
    }
  }
}