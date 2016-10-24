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
        properties: _.mapValues(action.serialPorts, properties => {
          return Object.assign({}, properties, {
            status: {
              status: 'waitingOnSocket'
            },
            size: {
              columns: 0,
              rows: 0
            }
          });
        })
      };
    case UPDATE_STATUS:
      return Object.assign({}, state, {
        properties: Object.assign({}, state.properties, {
          [action.name]: Object.assign({}, state.properties[action.name], {
            status: action.status
          })
        })
      });
    case UPDATE_SIZE:
      return Object.assign({}, state, {
        properties: Object.assign({}, state.properties, {
          [action.name]: Object.assign({}, state.properties[action.name], {
            size: {
              columns: action.columns,
              rows: action.rows
            }
          })
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
