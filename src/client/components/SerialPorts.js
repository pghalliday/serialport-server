import _ from 'lodash';
import React, {PropTypes} from 'react';
import FetchSerialPortsError from './FetchSerialPortsError';
import FetchingSerialPorts from './FetchingSerialPorts';
import {Layout, Header, Navigation, Drawer, Content, Snackbar} from 'react-mdl';
import {Link} from 'react-router';
import Terminal from './Terminal';

const visibleStyle = {
};

const hiddenStyle = {
  display: 'none'
};

const clickableStyle = {
  cursor: 'pointer'
};

const SerialPorts = ({serialPorts, activeSerialPort, onStatus, onResize, onSetSizeWithStty, onSetSizeWithExport}) => {
  if (!_.isUndefined(serialPorts.error)) {
    return (
      <FetchSerialPortsError error={serialPorts.error} />
    );
  } else if (!_.isUndefined(serialPorts.properties)) {
    const names = Object.keys(serialPorts.properties);
    activeSerialPort = activeSerialPort || names[0];
    const activeProperties = serialPorts.properties[activeSerialPort];
    const activeColumns = activeProperties.size.columns;
    const activeRows = activeProperties.size.rows;
    const activeStatus = activeProperties.status.status;
    const activeSocket = activeProperties.socket;
    return (
      <Layout fixedHeader>
        <Header title={activeSerialPort.toUpperCase()}>
          <Navigation>
            {_.map(names, name =>
              <Link key={name} to={`/serialports/${name}`}>{name}</Link>
            )}
          </Navigation>
        </Header>
        <Drawer title={activeSerialPort.toUpperCase()}>
          <Navigation>
            <a href={activeProperties.captureFile} target="_blank">
              Download capture file
            </a>
            <span
              style={clickableStyle}
              onClick={onSetSizeWithExport.bind(null, activeSocket, activeColumns, activeRows)}
            >
              Set size to ({activeColumns},{activeRows}) using export
            </span>
            <span
              style={clickableStyle}
              onClick={onSetSizeWithStty.bind(null, activeSocket, activeColumns, activeRows)}
            >
              Set size to ({activeColumns},{activeRows}) using stty
            </span>
          </Navigation>
        </Drawer>
        <Content>
          {_.map(serialPorts.properties, (properties, name) =>
            <div key={name} style={activeSerialPort === name ? visibleStyle : hiddenStyle}>
              <Terminal
                name={name}
                socket={properties.socket}
                onStatus={onStatus.bind(null, name)}
                onResize={onResize.bind(null, name)}
              />
            </div>
          )}
        </Content>
        <Snackbar active={activeStatus !== 'open'}>
					Disconnected: attempting to reconnect...
				</Snackbar>
      </Layout>
    );
  } else {
    return (
      <FetchingSerialPorts />
    );
  }
};

SerialPorts.propTypes = {
  activeSerialPort: PropTypes.string,
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
  onResize: PropTypes.func.isRequired,
  onSetSizeWithStty: PropTypes.func.isRequired,
  onSetSizeWithExport: PropTypes.func.isRequired
};

export default SerialPorts;
