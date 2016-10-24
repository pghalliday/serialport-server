import {combineReducers} from 'redux';

import {
  FETCH_SERIALPORTS_ERROR,
  REQUEST_SERIALPORTS,
  RECEIVE_SERIALPORTS
} from './actions';

function serialPorts(state = {}, action) {
  switch (action.type) {
    case FETCH_SERIALPORTS_ERROR:
      return {
        error: action.error
      };
    case REQUEST_SERIALPORTS:
      return {};
    case RECEIVE_SERIALPORTS:
      return {
        sockets: action.serialPorts
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  serialPorts
});

export default rootReducer;
