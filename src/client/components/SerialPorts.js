import _ from 'lodash';
import React, {PropTypes} from 'react';
import FetchSerialPortsError from './FetchSerialPortsError';
import FetchingSerialPorts from './FetchingSerialPorts';
import SerialPort from './SerialPort';
import Name from './Name';

const visibleStyle = {
};

const hiddenStyle = {
  display: 'none'
};

const SerialPorts = ({serialPorts, activeSerialPort, onStatus, onResize}) => {
  if (!_.isUndefined(serialPorts.error)) {
    return (
      <FetchSerialPortsError error={serialPorts.error} />
    );
  } else if (!_.isUndefined(serialPorts.properties)) {
    activeSerialPort = activeSerialPort || Object.keys(serialPorts.properties)[0];
    return (
      <div>
        <div>
          {_.map(serialPorts.properties, (properties, name) =>
            <Name
              key={name}
              name={name}
              active={activeSerialPort === name}
            />
          )}
        </div>
        <div>
          {_.map(serialPorts.properties, (properties, name) =>
            <div key={name} style={activeSerialPort === name ? visibleStyle : hiddenStyle}>
              <SerialPort
                name={name}
                properties={properties}
                onStatus={onStatus.bind(null, name)}
                onResize={onResize.bind(null, name)}
              />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <FetchingSerialPorts />
    );
  }
};

SerialPorts.propTypes = {
  serialPorts: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.shape({
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
      }),
      PropTypes.shape({
        error: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.object
        ]).isRequired
      }),
      PropTypes.shape({})
    ])
  ).isRequired,
  onStatus: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired
};

export default SerialPorts;
