import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../../api/OpenWeatherMap';

class Weather extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: false
		};
	}
	handleSearch(location){
		this.setState({isLoading: true});
		OpenWeatherMap.getWeather(location)
			.then(temp => {
				this.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			})
			.catch(errorMessage => {
				this.setState({isLoading: false});
				alert(errorMessage);
			})
	}
	render(){
		var {isLoading, location, temp} = this.state;

		function renderMessage(){
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			} else if(location && temp) {
					return <WeatherMessage location={location} temp={temp} />;
			}
		}
		return (
			<div>
				<h2>Get Weather</h2>
				<WeatherForm onSearch={this.handleSearch.bind(this)} />
				{renderMessage()}
			</div>
		);
	}
}

export default Weather;