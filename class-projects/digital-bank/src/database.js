module.exports = {
  banco: {
    nome: 'DevForTech Banco',
    numero: '123',
    agencia: '0001',
    senha: 'Dev123',
  },
  contas: [
    {
      numero: '1',
      saldo: 1000,
      usuario: {
        nome: 'Jenifer',
        cpf: '00011122233',
        data_nascimento: '1990-04-07',
        telefone: '71999998888',
        email: 'jeni@email.com',
        senha: '1234',
      },
    },
    {
      numero: '2',
      saldo: 50,
      usuario: {
        nome: 'Ana Veronica',
        cpf: '00011122234',
        data_nascimento: '1990-09-25',
        telefone: '71999998888',
        email: 'ana@email.com',
        senha: '12345',
      },
    },
  ],
  saques: [],
  depositos: [],
  transferencias: [],
};
