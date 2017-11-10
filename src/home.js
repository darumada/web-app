import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
	renderWeather(data) {
		console.log(data);
	}
	render() {
		return (
			<div>
				<div className="weather">
					<h3 className='weather_title'>Aqtobe</h3>
					<div className="weather_temp-block">
						<i className='wi wi-day-sunny icon'></i>
						<p className='weather_temp'>25 <span>°C</span></p>
					</div>
				</div>
			</div>
			)
	}
}

export default Home;