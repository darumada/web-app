const initialState = {
	isRun : false,
	error: null
}
const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_WEATHER' : {
			return {...state, isRun:true}
			break;
		}
		case 'UPDATE_WEATHER_OK' : { 
			return {...state, temp: action.temp, icon: action.icon, isRun:false}
			break;
		}
		case 'UPDATE_WEATHER_ERROR' : { 
			return {...state, error: action.error, isRun:false}
			break;
		}
	}
	return state;
};

export default weatherReducer;