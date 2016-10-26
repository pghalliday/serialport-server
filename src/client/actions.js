import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import io from 'socket.io-client';

export const FETCH_SERIALPORTS_ERROR = 'FETCH_SERIALPORTS_ERROR';
function fetchSerialPortsError(error) {
  return {
    type: FETCH_SERIALPORTS_ERROR,
    error
  };
}

export const REQUEST_SERIALPORTS = 'REQUEST_SERIALPORTS';
function requestSerialPorts() {
  return {
    type: REQUEST_SERIALPORTS
  };
}

export const RECEIVE_SERIALPORTS = 'RECEIVE_SERIALPORTS';
function receiveSerialPorts(serialPorts) {
  return {
    type: RECEIVE_SERIALPORTS,
    serialPorts
  };
}

export function fetchSerialPorts() {
  return function(dispatch) {
    dispatch(requestSerialPorts());
    return fetch(`/serialports`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveSerialPorts(_.mapValues(json, (properties, name) => {
        const socket = io(properties.socket);
        socket.on('status', status => {
          dispatch(updateStatus(name, status));
        });
        return Object.assign({}, properties, {
          socket: socket
        });
      })));
    })
    .catch(error => {
      dispatch(fetchSerialPortsError(error));
    });
  };
}

export const UPDATE_STATUS = 'UPDATE_STATUS';
export function updateStatus(name, status) {
  return {
    type: UPDATE_STATUS,
    name: name,
    status: status
  };
}

export const UPDATE_SIZE = 'UPDATE_SIZE';
export function updateSize(name, columns, rows) {
  return {
    type: UPDATE_SIZE,
    name: name,
    columns: columns,
    rows: rows
  };
}

export const SET_SIZE_WITH_EXPORT = 'SET_SIZE_WITH_EXPORT';
export function setSizeWithExport(socket, columns, rows) {
  socket.emit('data', `export COLUMNS=${columns} && export LINES=${rows}\n`);
  return {
    type: SET_SIZE_WITH_EXPORT,
    socket: socket,
    columns: columns,
    rows: rows
  };
}

export const SET_SIZE_WITH_STTY = 'SET_SIZE_WITH_STTY';
export function setSizeWithStty(socket, columns, rows) {
  socket.emit('data', `stty columns ${columns} && stty rows ${rows}\n`);
  return {
    type: SET_SIZE_WITH_STTY,
    socket: socket,
    columns: columns,
    rows: rows
  };
}
