const weatherReducer = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_WEATHER_REQUEST' : {
			return state
			break;
		}
		case 'UPDATE_WEATHER_OK' : { 
			return {...state, temp: action.temp, icon: action.icon}
			break;
		}
		case 'UPDATE_WEATHER_ERROR' : { 
			return {...state, error: action.error}
			break;
		}
	}
	return state;
};

export default weatherReducer;