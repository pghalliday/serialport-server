import fetch from 'isomorphic-fetch';

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
      dispatch(receiveSerialPorts(json));
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
