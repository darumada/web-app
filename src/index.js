import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import weatherReducer from './redux/weatherreducer';


const store = createStore(weatherReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('app')
);