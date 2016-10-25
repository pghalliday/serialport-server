import React from 'react';
import SerialPortsContainer from '../containers/SerialPortsContainer';

const App = ({params}) => (
  <SerialPortsContainer activeSerialPort={params.name}/>
);

export default App;
