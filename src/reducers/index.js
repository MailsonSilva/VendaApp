import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cadProReducer from './cadProReducer';

export default combineReducers({
  user: userReducer,
  cadPro: cadProReducer,
});
