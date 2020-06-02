import Axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const getData = () => (dispatch) => {
	dispatch({ type: FETCH_DATA_START });
	Axios.get(`http://localhost:3333/smurfs`)
		.then((res) => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCH_DATA_FAIL, payload: `Error` }));
};
