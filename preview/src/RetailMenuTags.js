import React, {Component} from 'react';

export default class RetailMenuTags extends Component {

  buildTags(){

    return this.props.tags.map( (tag, index) => (
      <li className="retail-menu__message" id={`tag${tag.id }`}><span className="retail-menu__tag">{tag.id}</span> { tag.description }</li> 
    )); 
  }
  render(){
    return (
      <ul>
        { this.buildTags() }
      </ul>
    )
  }
}