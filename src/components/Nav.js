import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
	onSearch(e){
		e.preventDefault();
		var location = this.refs.location.value;
		var encodedLocation = encodeURIComponent(location);
		if (location.length > 0) {
			window.location.hash = '#/?location=' + encodedLocation;
			this.refs.location.value = '';
		}
	}
	render(){
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>React Weather App</li>
						<li>
							<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Weather</IndexLink>
						</li>
						<li>
							<Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</Link>
						</li>
						<li>
							<Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</Link>					
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<form onSubmit={this.onSearch.bind(this)}>
						<ul className='menu'>
							<li>
								<input ref='location' type='search' placeholder='Search weather by city' />
							</li>
							<li>
								<input type='submit' className='button' value='Get Weather' />
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
}

export default Nav;

var old = (
				<h1>Nav Component</h1>
);