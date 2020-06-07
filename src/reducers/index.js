import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import modal from './modal';
import albums from './albums';
import photosInfo from './photos';
import storiesInfo from './stories';
import persons from './persons';

const rootReducer = combineReducers({
  userInfo,
  session,
  storiesInfo,
  albums,
  photosInfo,
  modal,
  persons
});

export default rootReducer;
