const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  console.log(request.query);
  response.send(request.query);
});

routes.post('/cadastrar', (request, response) => {
  console.log(request.body);
  response.json(request.body);
});

routes.get('/produto/:id', (request, response) => {
  console.log(request.params);
  response.json(request.params);
});

module.exports = routes;
