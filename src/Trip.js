import React, { Component } from 'react';

class Trip extends Component {
	toggleSelected = () => {
		this.props.selectTrip(this.props.trip.id)
	}

	render() {
		const duration = this.props.trip.endTime - this.props.trip.startTime
		const classNames = this.props.selected ? 'trip selected' : 'trip'
		return(
			<div
				onClick={this.toggleSelected} 
				className={classNames} 
				style={{ left: `${this.props.trip.startTime + 75}px`, width: `${duration}px` }}
			>
				{this.props.trip.id}
			</div>
		)
	}
}

export default Trip