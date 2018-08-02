import React, { Component } from 'react';
import logo from './bus_logo.svg';
import './App.css';
import Bus from './Bus.js'
import fileData from './bus_scheduling_input.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: fileData.trips,
      buses: fileData.buses
    }

  }

  getTripsForBus(busId) {
    return this.state.trips.filter((trip) => trip.bus_id === busId)
  }

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
        <h2>Buses</h2>
        <div className="schedule">
          {this.state.buses.map(bus => (
            <Bus bus={bus}  trips={this.getTripsForBus(bus.id)} key={bus.id}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
