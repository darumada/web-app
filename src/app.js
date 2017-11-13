import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Menu from './components/menu';
import Home from './components/home';
import Calendar from './components/calendar';
import Settings from './components/settings';
import Login from './components/login';

class App extends React.Component{
	constructor(props) {
		super(props);
	}
	firstPage(isLogin) {
		return isLogin ? '/home' : '/login';
	}
	renderMenu(isLogin) {
		let styleObj = {
			display : 'flex'
		}
		if (!isLogin) {
			styleObj.display = 'none';
		}
		return styleObj;
	}
	render() {
		return (
			<HashRouter>
				<div className='container'>
					<Switch>
					  <Redirect exact from='/' to={this.firstPage(this.props.isLogin)} />
					  <Route path='/login'  component={Login} />
						<Route path='/home'  component={Home} />
						<Route path='/calendar' component={Calendar} />
						<Route path='/settings' component={Settings} />
					</Switch>
					<Menu style = {this.renderMenu(this.props.isLogin)} />	
				</div>
			</HashRouter>
		)
	}
}

export default connect(
	state => ({
		isLogin: state.userReducer.isLogin
	})
)(App);