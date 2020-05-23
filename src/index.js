import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'normalize.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './stylesGlobal/fonts.sass';
import './stylesGlobal/variables.sass';
import './stylesGlobal/styles.sass';
import './stylesGlobal/scrollbar.sass';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getUsers } from './actions/actionUser';
import { sessionCheck } from './actions/sessionCheck';
import { fetchUserFullName } from './actions/actionUserFullName';
import { getAlbums } from './actions/actionAlbums';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

store.dispatch(getUsers());
store.dispatch(sessionCheck(store.getState().session.sessionID));
store.dispatch(fetchUserFullName());
store.dispatch(getAlbums());
//получаю альбомы 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
