import {Action} from 'types';
import axios from 'axios';

export const APP_INCREMENT = 'APP_INCREMENT';
export const APP_DECREMENT = 'APP_DECREMENT';

const API_ENDPOINT = "10.0.0.4"

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
		// console.log(formula)
		let weights = formula.split(",").map((s)=>s.split("=")).reduce((prev: any, curr)=>{
			prev[curr[0]] = parseInt(curr[1])
			return prev
		}, {})
		const bounding = getState().App.bounding;
		const query = {
			ul: `${bounding.west},${bounding.north}`,
			lr: `${bounding.east},${bounding.south}`,
			...weights
		}
		axios.get(`http://${API_ENDPOINT}/rank`, {params: query}).then((data)=>{
			// const points = generatePoints(bounding);
			let points = data.data.map((p: any)=>({lat: (p.ul.latitude+p.lr.latitude)/2, lng: (p.ul.longitude+p.lr.longitude)/2, rank: p.rank}))
			.sort((a: any, b: any)=>{
				if(a.rank>b.rank){
					return -1
				} else {
					return 1
				}
			})
			dispatch({
				type: 'SET_POINTS',
				payload: points,
			});
		})
	},
};
