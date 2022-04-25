import React, { Component } from 'react';

import './Styles/App.css';
import Button from './Components/Button.js';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      result: ''
    }

    this.show = this.show.bind(this);
  }

  show(value) {
    if (this.state.result.length === 3) {
      this.setState({
        ...this.state,
        result: this.state.result[1] + this.state.result[2] + value
      })

    } else {
      this.setState({
        ...this.state,
        result: this.state.result + value
      })
    }
  };
  render() {
    return (
      <div className="App">
        <div className='app-wrapper'>
          <div className='buttons-block'>
            <Button value='1' func={this.show} />
            <Button value='2' func={this.show} />
            <Button value='3' func={this.show} />
            <Button value='4' func={this.show} />
            <Button value='5' func={this.show} />
          </div>
          <div className='result'><span>{this.state.result}</span></div>
        </div>
      </div>
    );
  }
}
