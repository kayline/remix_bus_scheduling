import React, { Component } from 'react';

class Trip extends Component {
	render() {
		const duration = this.props.trip.endTime - this.props.trip.startTime
		
		return(
			<div 
				className="trip" 
				style={{ left: `${this.props.trip.startTime}px`, width: `${duration}px` }}
			>
				{this.props.trip.id}
			</div>
		)
	}
}

export default Trip