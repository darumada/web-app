import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Menu from './components/menu';
import Home from './components/home';
import Calendar from './components/calendar';
import Settings from './components/settings';

class App extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<HashRouter>
				<div className='container'>
					<Switch>
					  <Redirect exact from='/' to='/home' />
						<Route path='/home'  component={Home} />
						<Route path='/calendar' component={Calendar} />
						<Route path='/settings' component={Settings} />
					</Switch>
					<Menu/>	
				</div>
			</HashRouter>
		)
	}
}

export default App;