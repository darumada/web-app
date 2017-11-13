import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
	render() {
		return (
			<div className='login'>
			<form>
				<p><input className='login-input' type='text' placeholder='Логин'></input></p>
				<p><input className='password-input' type='password' placeholder='Пароль'></input></p>
				<input className='submit-input' type='submit'></input>
			</form>
			</div>
		)
	}
}

export default Login;