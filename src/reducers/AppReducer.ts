import {APP_INCREMENT, APP_DECREMENT} from 'actions';

const initialState = {
	count: 1,
};

function AppReducer(state = initialState, action: Action): typeof initialState {
	switch (action.type) {
		case APP_INCREMENT:
			return {...state, ...{count: state.count + 1}};
		case APP_DECREMENT:
			return {...state, ...{count: state.count - 1}};
		default:
			return state;
	}
}

export default AppReducer;
