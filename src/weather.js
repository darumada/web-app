const renderWeather = function(data) {
	const temp = data.query.results.channel.item.condition.temp;
	const tempCode = +data.query.results.channel.item.condition.code;
	let classIcon;
	switch (tempCode) {
		case 0 : classIcon = 'wi-tornado'
			break;
		case 1 : classIcon = 'wi-hurricane'
			break; 
		case 2 : classIcon = 'wi-hurricane'
			break;
		case 4 : classIcon = 'wi-thunderstorm'
			break;  
		case 5 : classIcon = 'wi-sleet'
			break;  
		case 6 : classIcon = 'wi-sleet'
			break;
		case 7 : classIcon = 'wi-sleet'
			break;
		case 8 : classIcon = 'wi-rain-mix'
			break;
		case 11 : classIcon = 'wi-showers'
			break;
		case 12 : classIcon = 'wi-showers'
			break;
		case 16 : classIcon = 'wi-snow'
			break; 
		case 18 : classIcon = 'wi-sleet'
			break;
		case 19 : classIcon = 'wi-dust'
			break;
		case 20 : classIcon = 'wi-smog'
			break;
		case 21 : classIcon = 'wi-smog'
			break;
		case 22 : classIcon = 'wi-smog'
			break;
		case 24 : classIcon = 'wi-windy'
			break;
		case 25 : classIcon = 'wi-snowflake-cold'
			break;
		case 26 : classIcon = 'wi-cloudy'
			break;
		case 27 : classIcon = 'wi-night-cloudy'
			break;
		case 28 : classIcon = 'wi-day-cloudy'
			break;
		case 29 : classIcon = 'wi-night-partly-cloudy'
			break;
		case 30 : classIcon = 'wi-day-sunny-overcast'
			break;
		case 31 : classIcon = 'wi-night-clear'
			break;
		case 32 : classIcon = 'wi-day-sunny'
			break;
		case 33 : classIcon = 'wi-night-clear'
			break;
		case 34 : classIcon = 'wi-day-sunny'
			break;
		case 35 : classIcon = 'wi-day-hail'
			break;
		case 36 : classIcon = 'wi-hot'
			break;
		case 37 : classIcon = 'wi-thunderstorm'
			break;
		case 38 : classIcon = 'wi-thunderstorm'
			break;
		case 39 : classIcon = 'wi-thunderstorm'
			break;
		case 40 : classIcon = 'wi-snow-wind'
			break;
	}
	let response = {
		temp,
		classIcon
	};
}
export default renderWeather;
