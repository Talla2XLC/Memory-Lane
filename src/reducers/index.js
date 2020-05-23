import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import albums from './albums';
const rootReducer = combineReducers({
  userInfo,
  session,
  albums
});

export default rootReducer;
