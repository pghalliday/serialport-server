import React from 'react';
import {connect} from 'react-redux';
import Status from '../components/Status';

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.serialPorts.statuses[ownProps.name],
    size: state.serialPorts.sizes[ownProps.name]
  }
};

const StatusContainer = connect(
  mapStateToProps
)(Status);

export default StatusContainer;
