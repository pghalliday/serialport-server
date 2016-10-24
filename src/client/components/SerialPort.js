import React, {PropTypes} from 'react';
import CaptureFile from './CaptureFile';
import Size from './Size';
import Status from './Status';
import Terminal from './Terminal';

const SerialPort = ({name, properties, onStatus, onResize}) => (
  <div>
    <CaptureFile captureFile={properties.captureFile} />
    <Status status={properties.status} />
    <Size size={properties.size} />
    <Terminal
      socket={properties.socket}
      onStatus={onStatus}
      onResize={onResize}
    />
  </div>
);

SerialPort.propTypes = {
  name: PropTypes.string.isRequired,
  properties: PropTypes.shape({
    status: PropTypes.shape({
      status: PropTypes.string.isRequired,
      error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ])
    }).isRequired,
    size: PropTypes.shape({
      columns: PropTypes.number.isRequired,
      rows: PropTypes.number.isRequired
    }).isRequired,
    socket: PropTypes.string.isRequired
  }).isRequired,
  onStatus: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired
};

export default SerialPort;
