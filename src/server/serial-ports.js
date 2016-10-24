'use strict'

const IOSerialPort = require('socket.io-serialport');
const path = require('path');
const _ = require('lodash');

class SerialPorts {
  constructor(config) {
    this.serialPorts = _.map(config.serialPorts, (options, name) => {
      const ioSerialPort = new IOSerialPort({
        io: config.io,
        route: `${config.route}/${name}`,
        device: options.device,
        retryPeriod: options.retryPeriod,
        captureFile: path.resolve(config.captureDirectory, `${name}.log`),
        options: options.options
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
