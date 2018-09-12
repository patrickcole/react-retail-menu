import React, {Component} from 'react';
import RetailMenuItem from './RetailMenuItem';

export default class RetailMenuCategory extends Component {

  buildItems() {
    return this.props.items.map( (item, index) => (
      <RetailMenuItem key={index} item={item} />
    ));
  }

  render(){

    let categoryDescription;

    if ( this.props.description ) {

      categoryDescription = <p>{ this.props.description }</p>;
    }

    if ( this.props.is_category ){

      return (
        <div className="retail-menu">
          <h3 className="retail-menu-category">{ this.props.title }</h3>
          { categoryDescription }
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