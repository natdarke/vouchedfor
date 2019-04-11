import React, { Component } from 'react';

class Spend extends Component {
  constructor(){
    super();
    this.state = {
      mortgage : 200,
      bills: 400,
      general: 300
    }
  }

  makeChangeHandler = key => event => {
    this.setState({
      [key] : event.target.value
    });
  }

  render() {
    return (
        <>
            {this.props.children}
        </>
    );
  }
}

export default Spend;
