import React, { Component } from 'react';

class Input extends Component {
  
  getTimeClicked() {
    this.props.mobileNumber();
  }

  render() {
    return (<div>
      <button onClick={() => this.getTimeClicked()}>Get time</button>
    </div>);
  }
}

export default Input;
