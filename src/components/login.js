import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class Login extends React.Component{
	render() {
		console.log(this.props.testState)
		return (
			<div className='login'>
			<form onSubmit={this.props.doRequest}>
				<p><input className='login-input' type='text' placeholder='Логин'></input></p>
				<p><input className='password-input' type='password' placeholder='Пароль'></input></p>
				<input className='submit-input' type='submit'></input>
			</form>
			</div>
		)
	}
}

export default connect(
	state => ({
		testState : state
	}),
	dispatch => ({
		doRequest: () => {
			dispatch({type: 'DO_REQUEST', isRun : true});
			fetch('http://urekeshov.pp.ua').then((response) => {
				return response;
			}).then((response) => {
				response.json().then((data) => {
				dispatch({type:'DO_REQUEST_OK', response : data, isRun : false})
			});
			}).catch((err) => {
				dispatch({type: 'DO_REQUEST_ERROR', error : err, isRun : false})
			})
		}
	})
	)(Login);