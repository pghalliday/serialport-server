#!/usr/bin/env node

'use strict';

const path = require('path');
const Server = require('../');
const config = require(path.resolve(process.argv[2]));
const port = process.argv[3];
const server = new Server(config);

server.listen(port)
.then(() => {
  console.log(`Listening on port ${port}`);
});
