import React from 'react';
import {connect} from 'react-redux';
import SerialPorts from '../components/SerialPorts';
import {updateStatus, updateSize, setSizeWithStty, setSizeWithExport} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    serialPorts: state.serialPorts,
    activeSerialPort: ownProps.activeSerialPort
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStatus: (name, status) => {
      dispatch(updateStatus(name, status));
    },
    onResize: (name, columns, rows) => {
      dispatch(updateSize(name, columns, rows));
    },
    onSetSizeWithStty: name => {
      dispatch(setSizeWithStty(name));
    },
    onSetSizeWithExport: name => {
      dispatch(setSizeWithExport(name));
    }
  };
};

const SerialPortsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SerialPorts);

export default SerialPortsContainer;
