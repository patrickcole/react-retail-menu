import React, {Component} from 'react';
import RetailMenuCategory from './RetailMenuCategory';

export default class RetailMenuItem extends Component {

  buildTags(tags) {

    if ( tags ){

      return tags.map( (item, index) => <a href={`#tag${item.id}`}><abbr className="retail-menu__tag" key={index} title={item.description}>{item.id}</abbr></a>)
    } else {

      return;
    }
  }

  buildMenu(item) {

    if ( item.items ){

      return <RetailMenuCategory menu={ item } />
    } else {

      return;
    }
  }

  buildItem() {

    let itemPrice;
    let itemDescription;

    if ( this.props.item.title ){

      if ( this.props.item.description ) {

        itemDescription = <p className="retail-menu__description">{ this.props.item.description }</p>
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
          { this.buildMenu( this.props.item ) }
        </li>
      );
    } else {

      return;
    }
  }

  render(){
    return this.buildItem();
  }
}