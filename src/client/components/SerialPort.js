import React from 'react';
import SerialPortHeader from './SerialPortHeader';
import StatusContainer from '../containers/StatusContainer';
import TerminalContainer from '../containers/TerminalContainer';

const SerialPort = ({name, socket, capturefile}) => (
  <div>
    <SerialPortHeader name={name} capturefile={capturefile} />
    <StatusContainer name={name} />
    <TerminalContainer name={name} socket={socket} />
  </div>
);

export default SerialPort;
