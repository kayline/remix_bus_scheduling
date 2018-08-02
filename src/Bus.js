import React, { Component } from 'react';
import Trip from './Trip.js'

class Bus extends Component {
	render() {
		return (
			<div className="bus">
        {this.props.trips.map(trip => (
        	<Trip trip={trip} key={trip.id}/>
      	))}
      </div>
			)
	}
}

export default Bus