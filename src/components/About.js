import React, {Component} from 'react';

var About = props => {
		return (
			<div>
				<h2 className='text-center'>About Component</h2>
				<p>This is a simple react application built on React. I've made it to learn React...</p>
				<p>Here are some of the tools that I've used:</p>
				<ul>
					<li><a href='https://facebook.github.io/react'>React</a> - This was the Javascript framework used.</li>
					<li><a href='http://www.openweathermap.org'>Open Weather Map</a> - This was used to get the weather data by city name.</li>
				</ul>
			</div>
		);
}

export default About;