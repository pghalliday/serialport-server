const path = require('path');

module.exports = {
  logger: {
    filename: path.resolve(__dirname, 'output.log'),
    level: 'info'
  },
  capture: {
    directory: path.resolve(__dirname, 'capture')
  },
  serialPorts: {
    port1: {
      device: '/dev/tty.usbserial-12345678',
      retryPeriod: 1000,
      options: {
        baudrate: 115200
      }
    },
    port2: {
      device: '/dev/tty.usbserial-A400YTOV',
      retryPeriod: 1000,
      options: {
        baudrate: 115200
      }
    }
  }
}
