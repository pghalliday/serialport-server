import _ from 'lodash';
import React from 'react';
import FetchSerialPortsError from './FetchSerialPortsError';
import FetchingSerialPorts from './FetchingSerialPorts';
import SerialPort from './SerialPort';

const SerialPorts = ({serialPorts}) => {
  if (!_.isUndefined(serialPorts.error)) {
    return (
      <FetchSerialPortsError error={serialPorts.error} />
    );
  } else if (!_.isUndefined(serialPorts.properties)) {
    return (
      <div>
        {_.map(serialPorts.properties, (properties, name) =>
          <SerialPort
            key={name}
            name={name}
            properties={properties}
          />
        )}
      </div>
    );
  } else {
    return (
      <FetchingSerialPorts />
    );
  }
};

export default SerialPorts;
