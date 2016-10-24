import React, {PropTypes} from 'react';
import {Component} from 'react';
import io from 'socket.io-client';
import {hterm} from 'hterm-umdjs';
import {ab2str} from '../lib/utils';

class Terminal extends Component {
  componentDidMount() {
    const {socket, onStatus, onResize} = this.props;
    const terminal = new hterm.Terminal();
    terminal.onTerminalReady = () => {
      const terminalIO = terminal.io.push();
      const serialport = io(socket);
      const sendData = (data) => {
        serialport.emit('data', data);
      };
      terminalIO.onVTKeystroke = sendData;
      terminalIO.sendString = sendData;
      terminalIO.onTerminalResize = onResize;
      serialport.on('data', data => {
        terminalIO.print(ab2str(data));
      });
      serialport.on('status', onStatus);
    };
    terminal.decorate(this.terminalDiv);
    terminal.installKeyboard();
  }

  render() {
    return (
      <div ref={div => this.terminalDiv = div}>
      </div>
    );
  }
}

Terminal.propTypes = {
  socket: PropTypes.string.isRequired,
  onStatus: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired
};

export default Terminal;
