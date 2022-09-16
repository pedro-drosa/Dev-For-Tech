const express = require('express');

const APP_PORT = 3333;
const BASE_URL = '127.0.0.1';

const server = express();

server.get('/', (request, response) => {
  response.send('Hello nodemon');
});

server.listen(APP_PORT, () => {
  console.log(`Server running on http://${BASE_URL}:${APP_PORT}`);
});
