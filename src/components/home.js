import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import renderIcon from '.././tools/rendericon';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.props.updateWeather();
	}
	render() {	
		return (
			<div>
				<div className="weather">
					<h3 className='weather_title'>Aqtobe</h3>
					<div className="weather_temp-block">
						{renderIcon(this.props.icon)}
						<p className='weather_temp'>{this.props.temp}<i className='wi wi-celsius'></i></p>
					</div>
				</div>
			</div>
			)
	}
}

export default connect(
		state => ({
			temp: state.temp,
			icon: state.icon
		}),
		dispatch => ({
			updateWeather: () => {
				dispatch({type: 'UPDATE_WEATHER'});
				fetch('http://api.openweathermap.org/data/2.5/weather?id=610611&APPID=8b016ecf4ba38cde09861362f7f981e9&units=metric').then((response) => {				
					return response;
				}).then((response) => {
					response.json().then((data)=>{
						dispatch({type: 'UPDATE_WEATHER_OK', temp : data.main.temp, icon : data.weather[0].icon})
					});
				}).catch((err) => {
					dispatch({type: "UPDATE_WEATHER_ERROR", error : err})
				})
				
			}
		})
	)(Home);