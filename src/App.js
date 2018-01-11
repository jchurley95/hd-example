import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatelessExample from './components/StatelessExample';
import StateExample from './components/StateExample';

class App extends Component {
  constructor () {
    super();
    this.state = {
      thisGuy: "this guy"
    }
  }
  render() {
    return (
      <div className="App">
        <StatelessExample thisGuy={this.state.thisGuy}/>
        <StateExample/>
        <p className="App-intro">
          To getrted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
