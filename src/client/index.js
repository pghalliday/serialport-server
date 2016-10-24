import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {fetchSerialPorts} from './actions';
import rootReducer from './reducers';
import React from 'react';
import {render} from'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {hterm, lib} from 'hterm-umdjs';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

hterm.defaultStorage = new lib.Storage.Local();

store.dispatch(fetchSerialPorts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
