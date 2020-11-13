import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 'reducers';
export const history = createBrowserHistory();

const composeEnhancer =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer(history),
	composeEnhancer(applyMiddleware(routerMiddleware(history)))
);
export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
export default store;
