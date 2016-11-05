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
					<input type="search" placeholder="Search weather by city" ref="location" />
					<button className='button expanded hollow'>Get weather!</button>
				</form>
			</div>
		);
	}
}

WeatherForm.propTypes = {
	onSearch: PropTypes.func.isRequired
};

export default WeatherForm;