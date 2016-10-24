import React from 'react';
import Name from './Name';
import CaptureFile from './CaptureFile';
import Size from './Size';
import Status from './Status';
import Terminal from './Terminal';

const SerialPort = ({name, properties, onStatus, onResize}) => (
  <div>
    <Name name={name} />
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

export default SerialPort;
