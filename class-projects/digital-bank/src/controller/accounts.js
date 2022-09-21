let { contas } = require('../database');
const { senhaBanco } = require('./verifications.js');

const listarContas = (req, res) => {
  const { senha_banco } = req.query;

  senhaBanco(req, res, senha_banco);

  return res.status(200).json(contas);
};

const criarConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const { senha_banco } = req.query;
  let identificador = 1;

  senhaBanco(req, res, senha_banco);

  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: 'Você não informou todos os campos.' });
  }

  if (contas.length !== 0) {
    identificador = contas.length + 1;
  }

  const cpfExiste = contas.find((conta) => {
    const { usuario } = conta;
    return usuario.cpf === cpf;
  });

  const emailExiste = contas.find((conta) => {
    const { usuario } = conta;
    return usuario.email === email;
  });

  if (cpfExiste || emailExiste) {
    return res
      .status(400)
      .json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!' });
  }

  const conta = {
    numero: `${identificador}`,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  };

  contas.push(conta);

  return res.status(201).json();
};

const atualizarConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const { senha_banco } = req.query;
  const { numeroConta } = req.params;

  senhaBanco(req, res, senha_banco);

  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: 'Você não informou todos os campos.' });
  }

  const contaExiste = contas.find((conta) => {
    return conta.numero === numeroConta;
  });

  if (!contaExiste) {
    return res
      .status(404)
      .json({ mensagem: 'O numero da conta informada não existe.' });
  }

  contaExiste.usuario = {
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha,
  };

  return res.status(204).json();
};

const excluirConta = (req, res) => {
  const { senha_banco } = req.query;
  const { numeroConta } = req.params;

  senhaBanco(req, res, senha_banco);

  const contaExiste = contas.find((conta) => {
    return conta.numero === numeroConta;
  });

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

  contas = contas.filter((conta) => {
    return conta.numero !== contaExiste.numero;
  });

  return res.status(200).json();
};

module.exports = {
  listarContas,
  criarConta,
  atualizarConta,
  excluirConta,
};
