const Transfer = require('../models/Transfer');
const Deposit = require('../models/Deposit');
const Withdraw = require('../models/Withdraw');
const { senhaBanco, numeroConta, senhaUsuario } = require('./verifications.js');
const { format } = require('date-fns');

const depositar = async (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, valor } = req.body;

  senhaBanco(req, res, senha_banco);

  if (valor <= 0) {
    return res.status(400).json({
      mensagem: 'Não é permitido depósitos com valores negativos ou zerados.',
    });
  }

  if (!numero_conta || !valor) {
    return res
      .status(400)
      .json({ mensagem: 'O número da conta e o valor são obrigatórios!' });
  }

  const conta = await numeroConta(req, res, numero_conta);

  let novo_saldo = (conta.saldo += valor);

  await conta.updateOne({ saldo: novo_saldo });

  let data = new Date();
  data = format(data, 'yyyy-MM-dd HH:mm:ss');

  const registro = {
    data,
    numero_conta,
    valor,
  };

  await Deposit.create(registro);

  return res.status(200).json();
};

const sacar = async (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, valor, senha } = req.body;

  senhaBanco(req, res, senha_banco);

  if (!numero_conta || !valor || !senha) {
    return res
      .status(400)
      .json({ mensagem: 'O número da conta, valor e senha são obrigatórios!' });
  }

  const conta = await numeroConta(req, res, numero_conta);

  await senhaUsuario(req, res, conta, senha);

  if (valor <= 0) {
    return res.status(400).json({
      mensagem: 'O valor não pode ser menor que zero!',
    });
  }

  if (conta.saldo < valor) {
    return res
      .status(401)
      .json({ mensagem: 'Não há saldo disponível para saque.' });
  }

  let novo_saldo = (conta.saldo -= valor);

  await conta.updateOne({ saldo: novo_saldo });

  let data = new Date();
  data = format(data, 'yyyy-MM-dd HH:mm:ss');

  const registro = {
    data,
    numero_conta,
    valor,
  };

  Withdraw.create(registro);

  return res.status(200).json();
};

const transferir = async (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  if (!numero_conta_destino || !numero_conta_destino || !valor || !senha) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.',
    });
  }

  senhaBanco(req, res, senha_banco);

  const contaOrigem = await numeroConta(req, res, numero_conta_origem);
  const contaDestino = await numeroConta(req, res, numero_conta_destino);

  senhaUsuario(req, res, contaOrigem, senha);

  if (valor <= 0) {
    return res.status(400).json({
      mensagem: 'O valor não pode ser menor que zero!',
    });
  }

  if (contaOrigem.saldo < valor) {
    return res
      .status(401)
      .json({ mensagem: 'Não há saldo disponível para saque.' });
  }

  let novo_saldo_conta_origem = (contaOrigem.saldo -= valor);
  let novo_saldo_conta_destino = (contaDestino.saldo += valor);

  await contaOrigem.updateOne({ saldo: novo_saldo_conta_origem });
  await contaDestino.updateOne({ saldo: novo_saldo_conta_destino });

  let data = new Date();
  data = format(data, 'yyyy-MM-dd HH:mm:ss');

  const registro = {
    data,
    numero_conta_origem,
    numero_conta_destino,
    valor,
  };

  await Transfer.create(registro);

  return res.status(200).json();
};

const saldo = async (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, senha } = req.query;

  await senhaBanco(req, res, senha_banco);

  if (!numero_conta || !senha) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.',
    });
  }

  const conta = await numeroConta(req, res, numero_conta);

  senhaUsuario(req, res, conta, senha);

  return res.status(200).json(conta.saldo);
};

const extrato = async (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, senha } = req.query;

  senhaBanco(req, res, senha_banco);

  if (!numero_conta || !senha) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.',
    });
  }

  const conta = await numeroConta(req, res, numero_conta);

  await senhaUsuario(req, res, conta, senha);

  const meusDepositos = await Deposit.find({ numero_conta });

  const meusSaques = await Withdraw.find({ numero_conta });

  const transferenciasEnviadas = await Transfer.find({
    numero_conta_origem: numero_conta,
  });

  const transferenciasRecebidas = await Transfer.find({
    numero_conta_destino: numero_conta,
  });

  const relatorioDaConta = {
    depositos: meusDepositos,
    saques: meusSaques,
    transferenciasEnviadas,
    transferenciasRecebidas,
  };

  return res.status(200).json(relatorioDaConta);
};

module.exports = {
  depositar,
  sacar,
  transferir,
  saldo,
  extrato,
};
