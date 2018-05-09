import reduceReducers from "../../Utils/reduce-reducers";
import initialState from './inital-state';
const INITIAL_STATE = initialState;

let authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGGED_IN':
			return {
				...state,
				...action.payload
			};
		default: return state;
	}
};

const rootReducer = reduceReducers(
	authReducer
);

export default rootReducer;
