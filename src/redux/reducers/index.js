import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userInfo from "./user";
import session from "./session";
import modal from "./modal";
import albums from "./albums";
import photosInfo from "./photos";
import storiesInfo from "./stories";
import persons from "./persons";
import searchQueryInfo from "./searchQuery.js";

const rootReducer = combineReducers({
  routing: routerReducer,
  userInfo,
  session,
  storiesInfo,
  albums,
  photosInfo,
  modal,
  persons,
  searchQueryInfo,
});

export default rootReducer;
