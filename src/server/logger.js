'use strict';

const winston = require('winston');

class Logger {
  constructor(config) {
    this.winston = new winston.Logger({
      transports: [
        new winston.transports.File({
          filename: config.filename,
          level: config.level
        })
      ]
    });
  }

  log() {
    this.winston.log.apply(this.winston, arguments);
  }
}

module.exports = Logger;
