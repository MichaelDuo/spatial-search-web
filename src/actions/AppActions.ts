import {Action} from 'types';

export const APP_INCREMENT = 'APP_INCREMENT';
export const APP_DECREMENT = 'APP_DECREMENT';

function generatePoints({south, west, north, east}: any) {
	const points = [];
	for (let i = 0; i < 25; i++) {
		const lat = north + Math.random() * (south - north);
		const lng = west + Math.random() * (east - west);
		points.push({
			lat,
			lng,
		});
	}
	return points;
}

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
	search: (formula: string): Function => (
		dispatch: any,
		getState: any
	): any => {
		const bounding = getState().App.bounding;
		const points = generatePoints(bounding);
		dispatch({
			type: 'SET_POINTS',
			payload: points,
		});
	},
};
