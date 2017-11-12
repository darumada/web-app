import React from 'react';

function renderIcon(data) {
	let iconClass = 'icon wi ';
	switch (data) {
		case '01d' : iconClass += 'wi-day-sunny';
		break;
		case '02d' : iconClass += 'wi-day-cloudy';
		break;
		case '03d' : iconClass += 'wi-cloud';
		break;
		case '04d' : iconClass += 'wi-cloudy';
		break;
		case '09d' : iconClass += 'wi-day-rain';
		break;
		case '10d' : iconClass += 'wi-day-rain';
		break;
		case '11d' : iconClass += 'wi-day-lightning';
		break;
		case '13d' : iconClass += 'wi-day-snow';
		break;
		case '50d' : iconClass += 'wi-smog';
		break;
		case '01n' : iconClass += 'wi-night-clear';
		break;
		case '02n' : iconClass += 'wi-night-alt-cloudy';
		break;
		case '03n' : iconClass += 'wi-cloud';
		break;
		case '04n' : iconClass += 'wi-cloudy';
		break;
		case '09n' : iconClass += 'wi-night-alt-rain';
		break;
		case '10n' : iconClass += 'wi-night-alt-rain';
		break;
		case '11n' : iconClass += 'wi-night-alt-lightning';
		break;
		case '13n' : iconClass += 'wi-night-alt-snow';
		break;
		case '50n' : iconClass += 'wi-smog';
		break;
	}
	return <i className={iconClass}></i>
}

export default renderIcon;