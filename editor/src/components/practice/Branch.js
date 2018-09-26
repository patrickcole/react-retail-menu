import React, {Component} from 'react';

export default class Branch extends Component {

  constructor(props){
    super(props);
    this.state = { 
      items: this.props.items 
    }
  }

  buildItems() {

    return this.state.items.map( (item, index) => {

      if ( item.items ){
        return <Branch key={`child${index}`} title={ item.title } items={ item.items } />
      } else {
        return <li key={`item${index}`}>{ item.title }</li>
      }
    });
  }

  render(){
    return (
      <li>
        <strong>{ this.props.title }</strong>
        <ul>
          { this.buildItems() }
        </ul>
      </li>
    )
  }
}