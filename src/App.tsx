import * as React from 'react';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = (): JSX.Element => (
	<div className="app">
		<Router>
			<Switch>
				<Route path="/2">
					<MainPage />
				</Route>
				<Route path="/">
					<MainPage />
				</Route>
			</Switch>
		</Router>
	</div>
);

export default App;
