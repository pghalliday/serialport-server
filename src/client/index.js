import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {fetchSerialPorts} from './actions';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(fetchSerialPorts()).then(() => {
  console.log(store.getState());
});
