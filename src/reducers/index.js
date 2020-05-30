import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import userStories from './stories';
import persons from './persons';
import albums from './albums';
import modal from './modal';

const rootReducer = combineReducers({
  userInfo,
  session,
  userStories,
  albums,
  modal,
  persons
});

export default rootReducer;
