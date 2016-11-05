import React, {Component, PropTypes} from 'react';

class ErrorModal extends Component {
	componentDidMount(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}
	render(){
		var {title, message} = this.props;
		return (
			<div id='error-modal' className='reveal tiny text-center' data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className='button hollow' data-close="">Okay!</button>
				</p>
			</div>
		);
	}
}

ErrorModal.defaultProps = {
	title: 'Error'
};

ErrorModal.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string.isRequired
};

export default ErrorModal;