import React, {Component} from 'react';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onInputChange = e => {

    this.setState({ value: e.currentTarget.value });
  }

  onInputClick = e => {

    this.props.onInputUpdate(this.props.type, this.state.value);
  }

  onInputRender = () => {

    switch ( this.props.type ){

      case "description":
        
        return <textarea onChange={ this.onInputChange } value={ this.state.value }></textarea>;
      break;

      case "price":

        return (
          <span>
            $
            <input type="number" step="0.01" onChange={ this.onInputChange} value={ this.state.value} />
          </span>
        );
      break;

      default:

        return <input type="text" onChange={ this.onInputChange } value={ this.state.value } />;
      break;
    }
  }

  render() {

    return (
      <p>
        { this.onInputRender() }
        <button onClick={ this.onInputClick }>Update</button>
      </p>
    )
  }
}