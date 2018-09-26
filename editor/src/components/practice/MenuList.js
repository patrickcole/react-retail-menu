import React, {Component} from 'react';

import MenuListItems from './MenuListItems';

export default class MenuList extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [ 
        { text: "Desserts", key: `a${Date.now()}`, items: [
          { text: "Vanilla", key: `b${Date.now()}` }
        ] } 
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.inputNode = React.createRef();
  }

  addItem(e) {

    if ( this.inputNode.current.value !== "" ) {

      let newItem = {
        text: this.inputNode.current.value,
        key: Date.now()
      };

      this.setState( (prevState) => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
  
      this.inputNode.current.value = "";
    }

    e.preventDefault();
  }

  deleteItem(parent, key) {
    let filteredItems = this.state.items.filter( function(item) {
      return (item.key !== key);
    });

    this.setState({ items: filteredItems });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={ this.addItem }>
            <input ref={ this.inputNode } placeholder="enter task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <MenuListItems entries={ this.state.items } delete={ this.deleteItem } />
      </div>
    )
  }
}