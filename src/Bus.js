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
				<div className="bus-label">Bus {this.props.bus.id}</div>
				<div className="bus-trips">
	        {this.props.trips.map(trip => (
	        	<Trip
		        	key={trip.id} 
		        	trip={trip} 
		        	selected={this.props.selectedTripId === trip.id}
		        	selectTrip={this.props.selectTrip}
	        	/>
	      	))}
	      	</div>
      </div>
			)
	}
}

export default Bus