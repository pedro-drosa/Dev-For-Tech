const express = require('express');
const rotas = require('./routes');
const app = express();
const connectToDatabase = require('./database/');

connectToDatabase();
app.use(express.json());
app.use(rotas);

app.listen(4000);
console.log('Aplicação rodando na porta 4000');
