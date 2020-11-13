import {connect} from 'react-redux';
import MainPage from './MainPage';
import {RootState} from 'types';
import actions from 'actions';

export default connect(
	(state: RootState) => ({
		count: state.App.count,
	}),
	{
		increment: actions.App.increment,
		decrement: actions.App.decrement,
	}
)(MainPage);
