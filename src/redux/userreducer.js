const initialState = {
	isLogin : false,
	isRun : false,
	error: null
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DO_REQUEST' : {
			return {...state, isRun : action.isRun}
			break;
		}
		case 'DO_REQUEST_OK' : {
			return {...state,response : action.response , isRun : action.isRun}
			break;
		}
		case 'DO_REQUEST_ERROR' : {
			return {...state,error : action.err ,isRun: action.isRun}
			break;
		}
	}
	return state;
};

export default userReducer;