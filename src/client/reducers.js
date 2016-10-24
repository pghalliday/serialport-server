import {combineReducers} from 'redux';

import {
  FETCH_SERIALPORTS_ERROR,
  REQUEST_SERIALPORTS,
  RECEIVE_SERIALPORTS,
  UPDATE_STATUS,
  UPDATE_SIZE
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
        properties: action.serialPorts,
        sizes: _.mapValues(action.serialPorts, () => {
          return {
            columns: 0,
            rows: 0
          };
        }),
        statuses: _.mapValues(action.serialPorts, () => {
          return {
            status: 'waitingOnSocket'
          };
        })
      };
    case UPDATE_STATUS:
      return Object.assign({}, state, {
        statuses: Object.assign({}, state.statuses, {
          [action.name]: action.status
        })
      });
    case UPDATE_SIZE:
      return Object.assign({}, state, {
        sizes: Object.assign({}, state.sizes, {
          [action.name]: {
            columns: action.columns,
            rows: action.rows
          }
        })
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  serialPorts
});

export default rootReducer;
