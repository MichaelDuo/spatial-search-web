import {Action as ReduxAction} from 'redux';
import {RootState as rootState} from 'store';

declare global {
	interface TestYo {
		hey: number;
	}
	interface Action extends ReduxAction {}
	namespace JSX {
		interface IntrinsicElements {
			'video-js': any;
		}
	}
	type RootState = rootState;
}
