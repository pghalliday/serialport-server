import React from 'react';

const SerialPortHeader = ({name, capturefile}) => (
  <div>
    <h1>{name}</h1>
    <a href={capturefile}>download capture file</a>
  </div>
);

export default SerialPortHeader;
