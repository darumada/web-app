const initialState = {
	isRun : false,
	error: null
};
const sheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_SHEDULE' : {
			return {...state, isRun:true}
			break;
		}
		case 'UPDATE_SHEDULE_OK' : {
			return {...state, isRun:false, lessons : action.lessons, group : action.group, day : action.day};
			break;
		}
		case 'UPDATE_SHEDULE_ERROR' : {
			return {...state, isRun:false, error : action.error};
			break;
		}
	}
	return state;
};

export default sheduleReducer;