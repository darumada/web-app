import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
	render() {
		return <ul className="menu">
						<li><NavLink exact activeClassName='active' to='/home'><i className="fa fa-home" aria-hidden="true"></i></NavLink></li>
						<li><NavLink activeClassName='active' to='/calendar'><i className="fa fa-calendar" aria-hidden="true"></i></NavLink></li>
						<li><NavLink activeClassName='active' to='/three'><i className="fa fa-calendar" aria-hidden="true"></i></NavLink></li>
						<li><NavLink activeClassName='active' to='/four'><i className="fa fa-calendar" aria-hidden="true"></i></NavLink></li>
						<li><NavLink activeClassName='active' to='/settings'><i className="fa fa-cog" aria-hidden="true"></i></NavLink></li>
					</ul>		
	}
}

export default Menu;