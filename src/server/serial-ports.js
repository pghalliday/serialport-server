'use strict'

const IOSerialPort = require('socket.io-serialport');
const path = require('path');
const _ = require('lodash');

class SerialPorts {
  constructor(config) {
    this.serialPorts = _.map(config.serialPorts, (options, name) => {
      const ioSerialPort = new IOSerialPort({
        io: config.io,
        path: `${config.route}/${name}/socket`,
        device: options.device,
        baudrate: options.baudrate,
        retryPeriod: options.retryPeriod,
        captureFile: path.resolve(config.captureDirectory, `${name}.cap`)
      });
      ioSerialPort.on('log', event => {
        config.logger.log(event.level, `${name}: ${event.message}`);
      });
      return ioSerialPort;
    });
  }

  open() {
    return Promise.all(
      _.map(this.serialPorts, ioSerialPort => ioSerialPort.open())
    );
  }

  close() {
    return Promise.all(
      _.map(this.serialPorts, ioSerialPort => ioSerialPort.close())
    );
  }
}

module.exports = SerialPorts;
