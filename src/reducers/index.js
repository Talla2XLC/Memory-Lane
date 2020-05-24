import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import userStories from './stories';

import albums from './albums';
const rootReducer = combineReducers({
  userInfo,
  session,
  // albums,
  userStories
});

export default rootReducer;
