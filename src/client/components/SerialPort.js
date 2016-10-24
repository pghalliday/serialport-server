import React from 'react';
import Name from './Name';
import CaptureFile from './CaptureFile';
import Size from './Size';
import Status from './Status';
import TerminalContainer from '../containers/TerminalContainer';

const SerialPort = ({name, properties}) => (
  <div>
    <Name name={name} />
    <CaptureFile captureFile={properties.captureFile} />
    <Status status={properties.status} />
    <Size size={properties.size} />
    <TerminalContainer name={name} socket={properties.socket} />
  </div>
);

export default SerialPort;
