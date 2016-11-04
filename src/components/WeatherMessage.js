import React, {Component, PropTypes} from 'react';

var WeatherMessage = props => {
		var {location, temp} = props;
		return (
			<h3 className='text-center'>It is {props.temp}&#176;C in {props.location}</h3>
		);
}

WeatherMessage.propTypes = {
	location: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired
}

export default WeatherMessage;