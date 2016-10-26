import {combineReducers} from 'redux';

import {
  FETCH_SERIALPORTS_ERROR,
  REQUEST_SERIALPORTS,
  RECEIVE_SERIALPORTS,
  UPDATE_SOCKET_STATUS,
  UPDATE_STATUS,
  UPDATE_SIZE
} from './actions';

import {headers as headerThemes} from './lib/themes';

function serialPorts(state = {}, action) {
  switch (action.type) {
    case FETCH_SERIALPORTS_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case REQUEST_SERIALPORTS:
      return {};
    case RECEIVE_SERIALPORTS:
      const serialPorts = action.serialPorts;
      return Object.assign({}, state, {
        properties: _.zipObject(
          Object.keys(serialPorts),
          _.zipWith(
            Object.values(serialPorts),
            headerThemes,
            (properties, theme) => {
              return Object.assign({}, properties, {
                socketStatus: {
                  status: 'disconnected'
                },
                status: {
                  status: 'waitingOnSocket'
                },
                size: {
                  columns: 0,
                  rows: 0
                },
                theme: theme
              });
            }
          )
        )
      });
    case UPDATE_SOCKET_STATUS:
      return Object.assign({}, state, {
        properties: Object.assign({}, state.properties, {
          [action.name]: Object.assign({}, state.properties[action.name], {
            socketStatus: action.status
          })
        })
      });
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
