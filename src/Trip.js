import React, { Component } from 'react';

class Trip extends Component {
	render() {
		return(
			<div className="trip">{this.props.trip.id}</div>
		)
	}
}

export default Trip