import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './stylesGlobal/fonts.sass';
import './stylesGlobal/variables.sass';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './components/Main/Router'

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index"

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
