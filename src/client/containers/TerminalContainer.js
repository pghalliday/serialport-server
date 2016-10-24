import React from 'react';
import {connect} from 'react-redux';
import Terminal from '../components/Terminal';
import {updateStatus, updateSize} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    socket: ownProps.socket
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStatus: status => {
      dispatch(updateStatus(ownProps.name, status))
    },
    onResize: (columns, rows) => {
      dispatch(updateSize(ownProps.name, columns, rows))
    }
  };
};

const TerminalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Terminal);

export default TerminalContainer;
