import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../../api/OpenWeatherMap';
import ErrorModal from './ErrorModal';

class Weather extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: false
		};
	}
	handleSearch(location){
		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});
		OpenWeatherMap.getWeather(location)
			.then(temp => {
				this.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			})
			.catch(e => {
				this.setState({
					isLoading: false,
					errorMessage: e.message
				});
			})
	}
	componentDidMount(){
		var location = this.props.location.query.location;
		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	}
	componentWillReceiveProps(newProps){
		var location = newProps.location.query.location;
		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}	
	}
	render(){
		var {isLoading, location, temp, errorMessage} = this.state;
		function renderMessage(){
			if (isLoading) {
				return <h3 className='text-center'>Fetching weather...</h3>;
			} else if(location && temp) {
					return <WeatherMessage location={location} temp={temp} />;
			}
		}

		function renderError(){
			if(typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return (
			<div>
				<h2 className='text-center page-title'>Get Weather</h2>
				<WeatherForm onSearch={this.handleSearch.bind(this)} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
}

export default Weather;