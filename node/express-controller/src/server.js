const express = require('express');
const routes = require('./routes');

const APP_PORT = 3333;
const BASE_URL = '127.0.0.1';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(APP_PORT, () => {
  console.log(`Server running on http://${BASE_URL}:${APP_PORT}`);
});
