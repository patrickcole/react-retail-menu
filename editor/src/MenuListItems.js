import React, {Component} from "react";

import MenuItemInput from './MenuItemInput';

export default class MenuListItems extends Component {

  constructor(props){
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li key={item.key}>
        <MenuItemInput title={item.text} />
        <button onClick={ () => this.delete(item.key) }>Delete</button>
      </li>
    )
  }

  render() {

    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}