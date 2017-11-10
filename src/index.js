import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderWeather from './weather';
import App from './app';


function playList(state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
		...state,
		action.song
		]
	}
	return state;
}

const store = createStore(playList);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('app')
);