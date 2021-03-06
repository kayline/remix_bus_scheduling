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
    this.addEmptyBus()
    this.setState({selectedTripId: tripId})
  }

  addTripToBus = (busId) => {
    if(this.state.selectedTripId != null) {
      var tripstoUpdate = this.state.trips
      var selectedTrip = this.getSelectedTrip(tripstoUpdate)
      var conflict = this.checkforTripConflict(busId, selectedTrip)
      console.log("Conflict:", conflict)

      if(!conflict) {
        var index = tripstoUpdate.indexOf(selectedTrip)
        tripstoUpdate[index].busId = busId
        this.setState({trips: tripstoUpdate, selectedTripId: null})
        this.pruneEmptyBuses()
      }
    }
  }

  addEmptyBus() {
    var buses = this.state.buses
    var busIdsWithTrips = this.state.trips.map(trip => trip.busId)
    var maxBusId = Math.max(...busIdsWithTrips)
    buses = [...buses, {id: maxBusId + 1, name: "New Bus"}]
    this.setState({buses: buses})
  }

  pruneEmptyBuses() {
    var oldBuses = this.state.buses
    var prunedBuses = []

    oldBuses.forEach(bus => {
      var trips = this.getTripsForBus(bus.id)
      if(trips.length > 0) {
        prunedBuses = [...prunedBuses, bus]
      }
    })
    this.setState({buses: prunedBuses})
  }

  getSelectedTrip(trips) {
    return trips.find(trip => trip.id === this.state.selectedTripId)
  }

  getTripsForBus(busId) {
    return this.state.trips.filter((trip) => trip.busId === busId)
  }

  checkforTripConflict(busId, selectedTrip) {
    var conflict = false
    var trips = this.getTripsForBus(busId)

    trips.forEach(busTrip => {
      if(this.tripsConflict(busTrip, selectedTrip)) {
        conflict = true
      } 
    })
    return conflict
  }

  tripsConflict(trip1, trip2) {
    var startOverlaps = trip1.startTime < trip2.startTime && trip1.endTime >= trip2.startTime
    var endOverlaps = trip2.startTime < trip1.startTime && trip2.endTime >= trip1.startTime

    if(startOverlaps || endOverlaps) {
      return true
    } else {
      return false
    } 
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
          <p className="attribution">School Bus by Alina Oleynik from the Noun Project</p>
        </div>
      </div>
    );
  }
}

export default App;
