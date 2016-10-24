import React from 'react';
import {connect} from 'react-redux';
import SerialPorts from '../components/SerialPorts';

const mapStateToProps = (state) => {
  return {
    serialPorts: state.serialPorts
  }
};

const SerialPortsContainer = connect(
  mapStateToProps
)(SerialPorts);

export default SerialPortsContainer;
