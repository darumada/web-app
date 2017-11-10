import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Menu from './menu';
import Home from './home';
import Calendar from './calendar';
import Settings from './settings';

class App extends React.Component{
	constructor(props) {
		super(props);
		this.props.onAddTrack();
	}
	render() {
		console.log(this.props.testStore);
		return (
			<BrowserRouter>
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/calendar' component={Calendar} />
						<Route path='/settings' component={Settings} />
					</Switch>
					<Menu/>	
				</div>
			</BrowserRouter>
		)
	}
}

export default connect(
		state => ({
			testStore: state
		}),
		dispatch => ({
			onAddTrack: () => {
				dispatch({type: 'ADD_TRACK', song:'123'})
			}
		})
	)(App);