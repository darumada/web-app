import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Settings extends React.Component {
	render() {
		if (!this.props.isLogin) {
			return <Redirect to='/' />
		}
		return (
			<div className='settings'>
				<button className='exitBtn' onClick={this.props.exitBtnClick}>Выход</button>
			</div>
		)
	}
}

export default connect(
	state => ({
		isLogin : state.userReducer.isLogin
	}),
	dispatch => ({
		exitBtnClick: () => {
			dispatch({type: 'EXIT'});
			localStorage.removeItem('isLogin');
			localStorage.removeItem('id');
		}
	})
	)(Settings);