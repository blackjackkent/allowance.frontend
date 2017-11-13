import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import 'font-awesome/css/font-awesome.min.css';
import '../styles/style.scss';

// Containers
import Full from './display/containers/Full/Full';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" name="Home" component={Full} />
		</Switch>
	</BrowserRouter>
);

export default App;
