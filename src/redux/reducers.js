import { combineReducers  } from 'redux';
import weatherReducer from './weatherreducer';
import userReducer from './userreducer';
import sheduleReducer from './shedulereducer';

export default combineReducers({
  weatherReducer,
  userReducer,
  sheduleReducer
});