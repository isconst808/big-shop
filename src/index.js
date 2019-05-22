import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect	} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';


ReactDOM.render(
	<ErrorBoundry>
		<Router>
			<Switch>
				<Route path="/home" component={App}/>
				<Redirect from="/" to="/home"/>
			</Switch>
		</Router>
	</ErrorBoundry>,
	document.getElementById('root')
);