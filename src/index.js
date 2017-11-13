import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import combineReducers from './redux/reducers';


const store = createStore(combineReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('app')
);