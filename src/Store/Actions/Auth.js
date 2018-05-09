export const login = (params) =>
	(dispatch, getState) => {
		return {
			type: 'LOGGED_IN',
			payload: null
		}
	}

export const logout = (params) =>
	(dispatch, getState) => {
		return {
			type: 'LOGGED_OUT',
			payload: null
		}
	}

export const setRedirectUrl = (params) =>
	(dispatch, getState) => {
		return {
			type: 'SET_REDIRECT_URL',
			payload: params
		}
	}
	
