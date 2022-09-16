const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  response.send('Olá Express');
});

routes.post('/cadastrar', (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

module.exports = routes;
