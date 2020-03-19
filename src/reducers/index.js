import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cadProReducer from './cadProReducer';
import vendaReducer from './vendaReducer';

export default combineReducers({
  user: userReducer,
  cadPro: cadProReducer,
  produtos: vendaReducer,
});
