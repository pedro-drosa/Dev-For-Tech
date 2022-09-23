const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  numero: { type: String, require: true },
  saldo: { type: Number, default: 0 },
  usuario: {
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    data_nascimento: { type: String },
    telefone: { type: String },
    email: { type: String, lowercase: true },
    senha: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
