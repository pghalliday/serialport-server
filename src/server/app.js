'use strict';

const express = require('express');
const http = require('http');

function promiseCallback(resolve, reject) {
  return function(error, value) {
    if (error) {
      reject(error);
    } else {
      resolve(value);
    }
  };
}

class App {
  constructor(config) {
    this.logger = config.logger;
    const app = express();
    this.server = new http.Server(app);
    app.use(express.static('src/static'));
    app.use(config.capture.route, express.static(config.capture.directory));
    app.get(config.serialPorts.route, (req, res) => {
      const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      const separator = fullUrl.endsWith('/') ? '' : '/';
      res.json(config.serialPorts.names.reduce((memo, name) => {
        memo[name] = fullUrl + separator + name;
        return memo;
      }, {}));
    });
  }

  listen(port) {
		return new Promise((resolve, reject) => {
      this.server.listen(port, promiseCallback(resolve, reject));
    }).then(() => {
      this.logger.log('info', `listening on port ${port}`);
    });
  }

  close() {
		return new Promise((resolve, reject) => {
      this.server.close(promiseCallback(resolve, reject));
    }).then(() => {
      this.logger.log('info', `closed`);
    });
  }
}

module.exports = App;
