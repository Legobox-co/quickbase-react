import actionType from '../action-type';
// import {browserHistory} from 'react-router';

export const login = (params) => (dispatch, getstate) => {
		dispatch({
			type: actionType.LOGGED_IN,
			payload: true
		})
	}

export const logout = () => (dispatch, getstate) => {
		dispatch( {
			type: actionType.LOGGED_OUT,
			payload: false
		})
	}

export const setRedirectUrl = (params) =>
	({dispatch, getState}) => {
		return {
			type: actionType.SET_REDIRECT_URL,
			payload: params
		}
	}

	
