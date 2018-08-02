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
      buses: fileData.buses,
      selectedTripId: null
    }
  }

  selectTrip = (tripId) => {
    this.setState({selectedTripId: tripId})
  }

  addTripToBus = (busId) => {
    if(this.state.selectedTripId != null) {
      var tripstoUpdate = this.state.trips
      var selectedTrip = this.getSelectedTrip(tripstoUpdate)
      var conflict = this.checkforTripConflict(busId, selectedTrip)

      if(!conflict) {
        var index = tripstoUpdate.indexOf(selectedTrip)
        tripstoUpdate[index].bus_id = busId
        this.setState({trips: tripstoUpdate, selectedTripId: null})
      }
    }
  }

  getSelectedTrip(trips) {
    return trips.find(trip => trip.id === this.state.selectedTripId)
  }

   getTripsForBus(busId) {
    return this.state.trips.filter((trip) => trip.bus_id === busId)
  }

  checkforTripConflict(busId, trip) {
    return false
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
        <h2>Bus Schedule</h2>
        <div className="schedule">
          {this.state.buses.map(bus => (
            <Bus
              key={bus.id}
              bus={bus}  
              trips={this.getTripsForBus(bus.id)}
              selectedTripId={this.state.selectedTripId}
              addTripToBus={this.addTripToBus}
              selectTrip={this.selectTrip}
            />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
