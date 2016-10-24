import React from 'react';

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

export default FetchSerialPortsError;
