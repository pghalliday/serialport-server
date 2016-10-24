import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SerialPortsContainer from '../containers/SerialPortsContainer';

const App = () => (
  <div>
    <Header />
    <SerialPortsContainer />
    <Footer />
  </div>
);

export default App;
