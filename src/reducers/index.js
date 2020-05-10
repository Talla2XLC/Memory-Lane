import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';

const rootReducer = combineReducers({
  userInfo,
  session
})

export default rootReducer;
