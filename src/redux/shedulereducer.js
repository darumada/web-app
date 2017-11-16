const initialState = {
	isRun : false,
	error: null
}
const sheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_SHEDULE' : {
			return {...state, isRun:true}
			break;
		}
		case 'UPDATE_SHEDULE_OK' : {
			return state;
			break;
		}
		case 'UPDATE_SHEDULE_ERROR' : {
			return state;
			break;
		}
	}
}