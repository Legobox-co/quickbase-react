import reduceReducers from "../../Utils/reduce-reducers";
import initialState from './inital-state';
import actionType from '../action-type';
const INITIAL_STATE = initialState;

let authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionType.LOGGED_IN:
			return {
				...state,
				isAuthenticated: true
			};
		case actionType.LOGGED_OUT:
			console.log("Reached here");
			return Object.assign({}, state, {
				isAuthenticated: false
			});
		case actionType.SET_REDIRECT_URL:
			return {
				...state,
				redirectUrl: action.payload
			}
		default: return state;
	}
};

const rootReducer = reduceReducers(
	authReducer
);

export default rootReducer;
