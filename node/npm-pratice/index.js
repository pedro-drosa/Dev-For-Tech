const http = require('http');
const url = require('url');
const queryString = require('query-string');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const queryParams = queryString.parse(url.parse(req.url).search);
  if (queryParams.question === 'melhor-filme') return res.end('starwars');
  if (queryParams.question === 'melhor-linguagem') return res.end('node');
  res.end("oops i don't know the answer");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
