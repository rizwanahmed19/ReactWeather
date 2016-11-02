import React, {Component, PropTypes} from 'react';

class WeatherForm extends Component {
	onFormSubmit(e){
		e.preventDefault();
		var location = this.refs.location.value;

		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Enter City Name" ref="location" />
					<button>Get weather!</button>
				</form>
			</div>
		);
	}
}

WeatherForm.propTypes = {
	onSearch: PropTypes.func.isRequired
};

export default WeatherForm;