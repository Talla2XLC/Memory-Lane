import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import userFullName from './userFullName';

const rootReducer = combineReducers({
  userInfo,
  session,
  userFullName
})

export default rootReducer;
