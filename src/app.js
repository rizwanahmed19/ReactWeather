import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />
			<IndexRoute component={Weather} />
		</Route>
	</Router>, 
	document.getElementById('app')
);