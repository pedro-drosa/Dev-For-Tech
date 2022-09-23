const { randomUUID } = require('crypto');
const Account = require('../models/Account');
const { senhaBanco } = require('./verifications.js');
const { formatISO } = require('date-fns');

const listarContas = async (req, res) => {
  const { senha_banco } = req.query;

  senhaBanco(req, res, senha_banco);

  const contas = await Account.find();

  return res.status(200).json(contas);
};

const criarConta = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const { senha_banco } = req.query;
  let identificador = randomUUID();

  senhaBanco(req, res, senha_banco);

  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: 'Você não informou todos os campos.' });
  }

  const accounts = await Account.find();

  const cpfExiste = accounts.some((account) => account.usuario.cpf === cpf);

  const emailExiste = accounts.some(
    (account) => account.usuario.email === email,
  );

  if (cpfExiste || emailExiste) {
    return res
      .status(400)
      .json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!' });
  }

  const [day, month, year] = data_nascimento.split('/');

  const data_nascimento_parsed = formatISO(new Date(year, month - 1, day), {
    representation: 'date',
  });

  const conta = {
    numero: `${identificador}`,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento: data_nascimento_parsed,
      telefone,
      email,
      senha,
    },
  };

  const user = await Account.create(conta);

  return res.status(201).json(user);
};

const atualizarConta = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const { senha_banco } = req.query;
  const { numeroConta } = req.params;

  senhaBanco(req, res, senha_banco);

  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: 'Você não informou todos os campos.' });
  }

  const contaExiste = await Account.findOne({ numero: numeroConta });

  if (!contaExiste) {
    return res
      .status(404)
      .json({ mensagem: 'O numero da conta informada não existe.' });
  }

  const updated = await contaExiste.updateOne({
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  });

  return res.status(200).json();
};

const excluirConta = async (req, res) => {
  const { senha_banco } = req.query;
  const { numeroConta } = req.params;

  senhaBanco(req, res, senha_banco);

  const contaExiste = await Account.findOne({ numero: numeroConta });

  if (!contaExiste) {
    return res
      .status(404)
      .json({ mensagem: 'O numero da conta informada não existe.' });
  }

  if (contaExiste.saldo !== 0) {
    return res
      .status(403)
      .json({ mensagem: 'A conta só pode ser removida se o saldo for zero!' });
  }

  await Account.deleteOne({ numero: numeroConta });

  return res.status(200).json();
};

module.exports = {
  listarContas,
  criarConta,
  atualizarConta,
  excluirConta,
};
