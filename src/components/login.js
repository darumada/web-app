import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
	loadPage(isRun) {
		return isRun ? "loading" : "loaded";
	}
	render() {
		if (this.props.isLogin) {
			return <Redirect to='/' />
		}
		return (
			<div className={this.loadPage(this.props.isRun)}>
				<div className="cssload-thecube">
					<div className="cssload-cube cssload-c1"></div>
					<div className="cssload-cube cssload-c2"></div>
					<div className="cssload-cube cssload-c4"></div>
					<div className="cssload-cube cssload-c3"></div>
				</div>
				<div className='login'>
					<form onSubmit={this.props.doRequest}>
						<p><input name='login' className='login-input' type='text' placeholder='Логин'></input></p>
						<p><input name='password' className='password-input' type='password' placeholder='Пароль'></input></p>
						<input name='submit' value='Отправить' className='submit-input' type='submit'></input>
					</form>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		isLogin : state.userReducer.isLogin
	}),
	dispatch => ({
		doRequest: (e) => {
			e.preventDefault();
			const inputs = document.querySelectorAll('input');
			const data = new FormData();
			Array.prototype.forEach.call(inputs, (input) => {
				data.append(input.name, input.value);
			});
			dispatch({type: 'DO_REQUEST', isRun : true});
			fetch('http://server/', {
				method: "POST",
				body: data
			}).then((response) => {
				response.json().then((data) => {
					localStorage.setItem('isLogin', data.isLogin);
					localStorage.setItem('id', data.id);
					dispatch({type:'DO_REQUEST_OK', isLogin : data.isLogin, id : data.id});
				});
			}).catch((err) => {
				dispatch({type: 'DO_REQUEST_ERROR', error : err})
			})
		}
	})
	)(Login);