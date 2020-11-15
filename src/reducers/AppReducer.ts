import {APP_INCREMENT, APP_DECREMENT} from 'actions';
import {AnyAction} from 'redux';

const initialState = {
	count: 1,
	bounding: {},
	points: [] as any[],
};

function AppReducer(
	state = initialState,
	action: AnyAction
): typeof initialState {
	switch (action.type) {
		case 'SET_BOUNDING':
			return {
				...state,
				...{bounding: action.payload},
			};
		case 'SET_POINTS':
			return {
				...state,
				...{points: action.payload},
			};
		default:
			return state;
	}
}

export default AppReducer;
