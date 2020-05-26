import { combineReducers } from 'redux';
import userInfo from './user';
import session from './session';
import modal from './modal';

import albums from './albums';
import photosInfo from './photos';
import storiesInfo from './stories';

const rootReducer = combineReducers({
  userInfo,
  session,
  storiesInfo,
  albums,
  photosInfo,
  modal
});

export default rootReducer;
