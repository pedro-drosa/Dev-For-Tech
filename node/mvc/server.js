const express = require('express');
const path = require('path');

const { index } = require('./controllers/product.controller');

const APP_PORT = 3333;
const BASE_URL = '127.0.0.1';

const server = express();

server.use(express.static(path.join(__dirname, 'views')));

server.get('/', index);

server.listen(APP_PORT, () => {
  console.log(`Server running on http://${BASE_URL}:${APP_PORT}`);
});
