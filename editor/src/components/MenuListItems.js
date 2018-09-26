import React, {Component} from "react";

import MenuItemInput from './MenuItemInput';

export default class MenuListItems extends Component {

  constructor(props){
    super(props);
    this.state = {
      entries: this.props.entries
    }
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {

    /*
    let subItems;
    if ( item.items ) {

      subItems = <MenuListItems entries={ item.items } delete={ this.props.deleteItem } />
    }
    */

    return (
      <li key={item.key}>
        <MenuItemInput title={item.text} />
        <button onClick={ () => this.delete(item.key) }>Delete</button>
        <hr />
        
      </li>
    )
  }

  render() {

    let todoEntries = this.state.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}