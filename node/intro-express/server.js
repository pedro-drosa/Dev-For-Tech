const express = require('express');

const APP_PORT = 3333;
const server = express();

server.get('/', (request, response) => {
  response.send('Hello express');
});

server.listen(APP_PORT, () =>
  console.log(`server running on port ${APP_PORT}`),
);
