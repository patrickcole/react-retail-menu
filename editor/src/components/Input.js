import React, {Component} from 'react';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onInputChange = e => {

    this.setState(
      { value: e.currentTarget.value },
      () => {

        this.props.onInputUpdate(this.props.type, this.state.value);
      });
  }

  onInputRender = () => {

    switch ( this.props.type ){

      case "description":
        
        return <textarea className="retail-input retail-input--description" onChange={ this.onInputChange } value={ this.state.value }></textarea>;
      case "price":

        return (
          <span className="retail-input retail-input--price">
            $
            <input type="number" step="0.01" onChange={ this.onInputChange} value={ this.state.value} />
          </span>
        );
      default:

        return <input className="retail-input retail-input--title" type="text" onChange={ this.onInputChange } value={ this.state.value } />;
    }
  }

  render() {

    return (
      <span className="retail-product__input">
        { this.onInputRender() }
      </span>
    )
  }
}