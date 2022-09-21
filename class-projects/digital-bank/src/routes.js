const express = require('express');
const {
  listarContas,
  criarConta,
  atualizarConta,
  excluirConta,
} = require('./controller/accounts');
const {
  depositar,
  sacar,
  transferir,
  saldo,
  extrato,
} = require('./controller/transactions');
const rotas = express();

rotas.get('/contas', listarContas);
rotas.post('/contas', criarConta);
rotas.put('/contas/:numeroConta/usuario', atualizarConta);
rotas.delete('/contas/:numeroConta', excluirConta);
rotas.post('/transacoes/depositar', depositar);
rotas.post('/transacoes/sacar', sacar);
rotas.post('/transacoes/transferir', transferir);
rotas.get('/contas/saldo', saldo);
rotas.get('/contas/extrato', extrato);

module.exports = rotas;
