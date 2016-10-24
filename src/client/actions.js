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
