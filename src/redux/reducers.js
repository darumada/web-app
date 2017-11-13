import { combineReducers  } from 'redux';
import weatherReducer from './weatherreducer';
import userReducer from './userreducer';

export default combineReducers({
  weatherReducer,
  userReducer
});