import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import renderIcon from '.././tools/rendericon';
import getDay from '.././tools/getday';

class Home extends React.Component {
	constructor(props) {	
		super(props);
		this.props.updateWeather();
		this.props.updateShedule('Числитель');
	}
	loadPage() {
		if (this.props.state.weatherReducer.isRun || this.props.state.sheduleReducer.isRun) {
			return 'loading'
		} else {
			return 'loaded'
		}
	}
	renderSelect() {
		if (localStorage.getItem('type')) {
			if (localStorage.getItem('type') == 'Числитель') {
				return (
					<select onChange={this.props.updateShedule}>
						<option defaultValue value='Числитель'>Числитель</option>
						<option value='Знаменатель'>Знаменатель</option>
					</select>
				)	
			}
			if (localStorage.getItem('type') == 'Знаменатель') {
				return (
					<select onChange={this.props.updateShedule}>
						<option value='Числитель'>Числитель</option>
						<option defaultValue value='Знаменатель'>Знаменатель</option>
					</select>
				)	
			}
		}	else {
				return (
						<select onChange={this.props.updateShedule}>
							<option defaultValue value='Числитель'>Числитель</option>
							<option value='Знаменатель'>Знаменатель</option>
						</select>
					)	
		}
	}
	renderShedule() {
		if (this.props.lessons) {
			const arr = [];
			this.props.lessons.forEach((item) => {
				if (item) {
					arr.push(item);
				}
			});
			const list = arr.map((item, index) => 
				<li key={index}>{item}</li>
			);
			return list;
		}
	}
	render() {	
		return (
			<div className={this.loadPage()}>
				<div className="cssload-thecube">
					<div className="cssload-cube cssload-c1"></div>
					<div className="cssload-cube cssload-c2"></div>
					<div className="cssload-cube cssload-c4"></div>
					<div className="cssload-cube cssload-c3"></div>
				</div>
				<div className='weather'>
					<h3 className='weather_title'>Aqtobe</h3>
					<div className="weather_temp-block">
						{renderIcon(this.props.icon)}
						<p className='weather_temp'>{this.props.temp}<i className='wi wi-celsius'></i></p>
					</div>
				</div>
				<div className='shedule'>
					{this.renderSelect()}
					<h1>{this.props.group}</h1>
					<ul className='shedule-list'>{this.renderShedule()}</ul>
				</div>
			</div>
			)
	}
}

export default connect(
		state => ({
			state: state,
			lessons: state.sheduleReducer.lessons,
			group: state.sheduleReducer.group,
			temp: state.weatherReducer.temp,
			icon: state.weatherReducer.icon
		}),
		dispatch => ({
			updateWeather: () => {
				dispatch({type: 'UPDATE_WEATHER'});
				fetch('http://api.openweathermap.org/data/2.5/weather?id=610611&APPID=8b016ecf4ba38cde09861362f7f981e9&units=metric').then((response) => {				
					response.json().then((data)=>{
						dispatch({type: 'UPDATE_WEATHER_OK', temp : data.main.temp, icon : data.weather[0].icon})
					});
				}).catch((err) => {
					dispatch({type: "UPDATE_WEATHER_ERROR", error : err})
				})		
			},
			updateShedule: (value) => {
				const data = new FormData();
				const date = new Date();
				const select = document.querySelector('select');
				if (!select) {
					if (localStorage.getItem('type')) {
						data.set('type', localStorage.getItem('type'));
					} else {
						data.set('type', value);
					}
				} else {
					localStorage.setItem('type', select.value);
					data.set('type', select.value);
				}
				data.set('id', localStorage.getItem('id'));
				data.set('day', getDay(date));
				dispatch({type: 'UPDATE_SHEDULE'});
				fetch('http://server/shedule.php', {
					method: "POST",
					body: data
				}).then((response) => {
					response.json().then((data) => {
						dispatch({type: 'UPDATE_SHEDULE_OK', lessons : data.lessons, group : data.group, day : data.day})
					});
				}).catch((err) => {
					dispatch({type: 'UPDATE_SHEDULE_ERROR', error : error})
				})
			}
		})
	)(Home);