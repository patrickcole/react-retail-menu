import React, {Component} from 'react';

export default class MenuItemInput extends Component {

  constructor(props) {
    super(props);
    this.inputNode = React.createRef();
    this.state = {
      value: props.title,
      isEditingEnabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleButtonClick = e => {

    if ( this.state.isEditingEnabled ){

      this.setState({ value: this.inputNode.current.value });
      this.handleEdit();
    } else {

      this.handleEdit();
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  handleEdit = e => {
    this.setState({ isEditingEnabled: !this.state.isEditingEnabled });
  }

  handleKeyDown = e => {

    if ( e.which === 13 ){  // ENTER

      this.setState({
        isEditingEnabled: false
      });
    } else if ( e.which === 27 ) {  // ESC

      this.setState({
        isEditingEnabled: false
      });
    }
  }

  render(){
    return (
      <li>
        <label 
          className={ this.state.isEditingEnabled ? 'menu-item-input--hidden' : '' }
          htmlFor={`nput${this.props.title}`}
          onDoubleClick={ this.handleEdit }
        >
          { this.state.value }
        </label>
        <input 
          className={ this.state.isEditingEnabled ? '' : 'menu-item-input--hidden' }
          id={`nput${this.props.title}`} 
          type="text" 
          value={this.state.value }
          onChange={ this.handleChange }
          onKeyDown={ this.handleKeyDown }
          ref={ this.inputNode }
         />
         <button
          onClick={ this.handleButtonClick }>
           { this.state.isEditingEnabled ? `Save` : `Edit` }
          </button>
      </li>
    )
  }
}