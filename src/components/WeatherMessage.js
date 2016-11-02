import React, {Component, PropTypes} from 'react';

var WeatherMessage = props => {
		var {location, temp} = props;
		return (
			<h1>It is {props.temp} in {props.location}</h1>
		);
}

WeatherMessage.propTypes = {
	location: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired
}

export default WeatherMessage;