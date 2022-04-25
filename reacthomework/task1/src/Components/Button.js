import React, { Component } from "react";
export default class Button extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <button onClick={() => this.props.func(this.props.value)}>{this.props.value}</button>
    );
  }
}