import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// setInterval(() => {
//   store.dispatch({
//     type: 'NEW_TIME',
//     time: new Date()
//   });
// }, 1000);
