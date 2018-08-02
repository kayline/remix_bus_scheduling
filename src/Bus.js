import React, { Component } from 'react';
import Trip from './Trip.js'

class Bus extends Component {
	addTrip = () => {
		this.props.addTripToBus(this.props.bus.id)
	}

	render() {
		return (
			<div 
				className="bus"
				onClick={this.addTrip}
			>
        {this.props.trips.map(trip => (
        	<Trip
	        	key={trip.id} 
	        	trip={trip} 
	        	selected={this.props.selectedTripId === trip.id}
	        	selectTrip={this.props.selectTrip}
        	/>
      	))}
      </div>
			)
	}
}

export default Bus