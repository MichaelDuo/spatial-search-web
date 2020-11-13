import {Action} from 'types';

export const APP_INCREMENT = 'APP_INCREMENT';
export const APP_DECREMENT = 'APP_DECREMENT';

export default {
	increment: (): Action => ({
		type: APP_INCREMENT,
		payload: {
			value: 1,
		},
	}),
	decrement: (): Action => ({
		type: APP_DECREMENT,
		payload: {
			value: 1,
		},
	}),
};
