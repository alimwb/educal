const initialUserState = {
  authData: null
}

const authReducer = function(state = initialUserState, action) {
  	switch(action.type) {
	  case 'AUTH_USER_DATA':
	    return Object.assign({}, state, { authData: action.authData });
  	}
  	return state;
}

export default authReducer;