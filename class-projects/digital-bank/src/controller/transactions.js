let { contas, depositos, saques, transferencias } = require('../database');
const { senhaBanco, numeroConta, senhaUsuario } = require('./verifications.js');
const { format } = require('date-fns');

const depositar = (req, res) => {
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

  const conta = numeroConta(req, res, numero_conta);

  conta.saldo += valor;

  let data = new Date();
  data = format(data, 'yyyy-MM-dd HH:mm:ss');

  const registro = {
    data,
    numero_conta,
    valor,
  };

  depositos.push(registro);

  return res.status(200).json();
};

const sacar = (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, valor, senha } = req.body;

  senhaBanco(req, res, senha_banco);

  if (!numero_conta || !valor || !senha) {
    return res
      .status(400)
      .json({ mensagem: 'O número da conta, valor e senha são obrigatórios!' });
  }

  const conta = numeroConta(req, res, numero_conta);

  senhaUsuario(req, res, conta, senha);

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

  conta.saldo -= valor;

  let data = new Date();
  data = format(data, 'yyyy-MM-dd HH:mm:ss');

  const registro = {
    data,
    numero_conta,
    valor,
  };

  saques.push(registro);

  return res.status(200).json();
};

const transferir = (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  if (!numero_conta_destino || !numero_conta_destino || !valor || !senha) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.',
    });
  }

  senhaBanco(req, res, senha_banco);

  const contaOrigem = numeroConta(req, res, numero_conta_origem);
  const contaDestino = numeroConta(req, res, numero_conta_destino);

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

  contaOrigem.saldo -= valor;
  contaDestino.saldo += valor;

  let data = new Date();
  data = format(data, 'yyyy-MM-dd HH:mm:ss');

  const registro = {
    data,
    numero_conta_origem,
    numero_conta_destino,
    valor,
  };

  transferencias.push(registro);

  return res.status(200).json();
};

const saldo = (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, senha } = req.query;

  senhaBanco(req, res, senha_banco);

  if (!numero_conta || !senha) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.',
    });
  }

  const conta = numeroConta(req, res, numero_conta);

  senhaUsuario(req, res, conta, senha);

  return res.status(200).json(conta.saldo);
};

const extrato = (req, res) => {
  const { senha_banco } = req.query;
  const { numero_conta, senha } = req.query;

  senhaBanco(req, res, senha_banco);

  if (!numero_conta || !senha) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.',
    });
  }

  const conta = numeroConta(req, res, numero_conta);

  senhaUsuario(req, res, conta, senha);

  const meusDepositos = depositos.filter((deposito) => {
    return deposito.numero_conta === numero_conta;
  });

  const meusSaques = saques.filter((saque) => {
    return saque.numero_conta === numero_conta;
  });

  const transferenciasEnviadas = transferencias.filter((transferencia) => {
    return transferencia.numero_conta_origem === numero_conta;
  });

  const transferenciasRecebidas = transferencias.filter((transferencia) => {
    return transferencia.numero_conta_destino === numero_conta;
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
