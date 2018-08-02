import React, { Component } from 'react';
import logo from './bus_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your Bus Scheduler</h1>
        </header>
        <p className="App-intro">
          Assign trips to existing buses, or create a new bus to handle a trip
        </p>
      </div>
    );
  }
}

export default App;
