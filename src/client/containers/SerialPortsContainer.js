import React from 'react';
import {connect} from 'react-redux';
import SerialPorts from '../components/SerialPorts';
import {updateStatus, updateSize} from '../actions';

const mapStateToProps = (state) => {
  return {
    serialPorts: state.serialPorts
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStatus: (name, status) => {
      dispatch(updateStatus(name, status))
    },
    onResize: (name, columns, rows) => {
      dispatch(updateSize(name, columns, rows))
    }
  };
};

const SerialPortsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SerialPorts);

export default SerialPortsContainer;
