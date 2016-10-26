'use strict';

const express = require('express');
const http = require('http');
const path = require('path');

const staticDir = path.resolve(__dirname, '..', 'static');
const indexHtml = path.join(staticDir, 'index.html');
const jsDir = path.join(staticDir, 'js');

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
    app.use('/js', express.static(jsDir));
    app.use(config.serialPorts.route, express.static(config.captureDirectory));
    app.get(config.serialPorts.route, (req, res) => {
      const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      const separator = fullUrl.endsWith('/') ? '' : '/';
      res.json(config.serialPorts.names.reduce((memo, name) => {
        memo[name] = {
          socket: fullUrl + separator + name,
          captureFile: fullUrl + separator + name + '.log'
        };
        return memo;
      }, {}));
    });
		app.get('/*', (req,res) => {
			res.sendFile(indexHtml);
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
