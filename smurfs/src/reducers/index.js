import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
} from '../actions';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	data: [],
	error: '',
	isFetching: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_START:
			return { data: [], error: '', isFetching: true };
		case FETCH_DATA_SUCCESS:
			return { data: [...action.payload], error: '', isFetching: false };
		case FETCH_DATA_FAIL:
			return { data: [], error: action.payload, isFetching: false };
		default:
			return state;
	}
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('Hello from global state', store.getState()));
export default store;
