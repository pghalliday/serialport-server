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
    orangepi: {
      device: '/dev/tty.usbserial-12345678',
      baudrate: 115200,
      retryPeriod: 1000
    }
  }
}
