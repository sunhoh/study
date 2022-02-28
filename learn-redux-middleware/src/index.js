import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store, { customHistory } from './redux/store'


ReactDOM.render(
  <BrowserRouter>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </BrowserRouter>,
  document.getElementById('root')
);