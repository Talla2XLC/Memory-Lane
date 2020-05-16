import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import userStories from './stories';

const rootReducer = combineReducers({
  userInfo,
  session,
  userStories
})

export default rootReducer;
