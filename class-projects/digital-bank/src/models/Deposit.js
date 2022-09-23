const mongoose = require('mongoose');

const DepositSchema = new mongoose.Schema({
  data: { type: Date, require: true },
  numero_conta: { type: String, require: true },
  valor: { type: Number, required: true },
});

const Deposit = mongoose.model('Deposit', DepositSchema);
module.exports = Deposit;
