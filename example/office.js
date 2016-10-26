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
    OrangePi: {
      device: '/dev/tty.usbserial-12345678',
      retryPeriod: 1000,
      options: {
        baudrate: 115200
      }
    },
    STB: {
      device: '/dev/tty.usbserial-A100AVYN',
      retryPeriod: 1000,
      options: {
        baudrate: 115200
      }
    }
  }
}
