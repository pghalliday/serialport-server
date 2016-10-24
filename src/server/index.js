'use strict';

const socketio = require('socket.io');

const Logger = require('./logger');
const App = require('./app');
const SerialPorts = require('./serial-ports');

const SERIALPORTS_ROUTE = '/serialports';
const CAPTUREFILES_ROUTE = '/capturefiles';

class Server {
  constructor(config) {
    const logger = new Logger(config.logger);
    const captureDirectory = config.capture.directory;
    const serialPorts = config.serialPorts;
    this.app = new App({
      serialPorts: {
        names: Object.keys(serialPorts),
        route: SERIALPORTS_ROUTE
      },
      capture: {
        directory: captureDirectory,
        route: CAPTUREFILES_ROUTE
      },
      logger: logger
    });
    const io = socketio(this.app.server);
    this.serialPorts = new SerialPorts({
      captureDirectory: captureDirectory,
      io: io,
      serialPorts: config.serialPorts,
      route: SERIALPORTS_ROUTE,
      logger: logger
    });
  }

  listen(port) {
    return this.app.listen(port)
    .then(() => {
      return this.serialPorts.open();
    });
  }

  close() {
    return this.serialPorts.close()
    .then(() => {
      return this.app.close();
    });
  }
}

module.exports = Server;
