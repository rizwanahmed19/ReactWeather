import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = props => {
	return (
			<div>
				<h1>Nav Component</h1>
				<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Weather</IndexLink>
				<Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</Link>
				<Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</Link>
			</div>
	);
}

export default Nav;