import React, {PropTypes} from 'react';
import {Component} from 'react';
import {hterm} from 'hterm-umdjs';
import {ab2str} from '../lib/utils';

class Terminal extends Component {
  componentDidMount() {
    const {socket, onResize} = this.props;
    const terminal = new hterm.Terminal();
    terminal.onTerminalReady = () => {
      const io = terminal.io.push();
      const sendData = (data) => {
        socket.emit('data', data);
      };
      io.onVTKeystroke = sendData;
      io.sendString = sendData;
      io.onTerminalResize = onResize;
      socket.on('data', data => {
        io.print(ab2str(data));
      });
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
  socket: PropTypes.object.isRequired,
  onResize: PropTypes.func.isRequired
};

export default Terminal;
