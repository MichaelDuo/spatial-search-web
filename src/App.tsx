import * as React from 'react';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = (): JSX.Element => (
	<div className="app">
		<Router>
			<Link to="/2">Second Page</Link>
			<Switch>
				<Route path="/2">
					<MainPage />
				</Route>
				<Route path="/">
					<SecondPage />
				</Route>
			</Switch>
		</Router>
	</div>
);

export default App;
