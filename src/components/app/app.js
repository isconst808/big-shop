import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {HomePage} from '../pages';

import './app.css'

const App = () => {
	return (
		<Switch>
			<Route path='/'
						 component={HomePage}
						 exact/>
		</Switch>
	);
};

export default App;