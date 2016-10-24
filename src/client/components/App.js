import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SerialPortsContainer from '../containers/SerialPortsContainer';

const App = ({params}) => (
  <div>
    <Header />
    <SerialPortsContainer activeSerialPort={params.name}/>
    <Footer />
  </div>
);

export default App;
