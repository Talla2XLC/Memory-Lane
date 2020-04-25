import React from 'react';
import ReactDOM from 'react-dom';
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
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {getUsers} from './actions/actionUser';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getUsers());

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
