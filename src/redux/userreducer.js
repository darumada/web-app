const initialState = {
	isLogin : (localStorage.getItem('isLogin') === 'false' || localStorage.getItem('isLogin') === null) ? false : true,
	isRun : false,
	error: null,
	id: (localStorage.getItem('id') === 'false' || localStorage.getItem('id') === null) ? null : localStorage.getItem('id')
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DO_REQUEST' : {
			return {...state, isRun : true}
			break;
		}
		case 'DO_REQUEST_OK' : {
			return {...state, isLogin : action.isLogin,id : action.id , isRun : false}
			break;
		}
		case 'DO_REQUEST_ERROR' : {
			return {...state,error : action.error ,isRun: false,}
			break;
		}
		case 'EXIT' : {
			return {...state,isLogin : false, id : null,}
		}
	}
	return state;
};

export default userReducer;