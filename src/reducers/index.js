import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import albums from './albums';
import modal from './modal';
const rootReducer = combineReducers({
  userInfo,
  session,
  albums,
  modal
});

export default rootReducer;
