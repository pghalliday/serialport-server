import React, {PropTypes} from 'react';

const FetchSerialPortsError = ({error}) => (
  <div>
    <p>
      Error encontered loading serial ports
    </p>
    <p>
      {JSON.stringify(error)}
    </p>
  </div>
);

FetchSerialPortsError.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default FetchSerialPortsError;
