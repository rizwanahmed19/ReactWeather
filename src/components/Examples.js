import React, {Component} from 'react';
import {Link} from 'react-router';
var Examples = props => {
	return (
			<div>
				<h2 className='text-center'>Examples</h2>
				<p>Here are few example locations to try out:</p>
				<ol>
					<li><Link to='/?location=karachi'>Karachi, PK</Link></li>
					<li><Link to='/?location=rio'>Rio, Brazil</Link></li>
				</ol>
			</div>
	);
}

export default Examples;