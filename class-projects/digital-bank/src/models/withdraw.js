const mongoose = require('mongoose');

const WithdrawSchema = new mongoose.Schema({
  data: { type: Date, require: true },
  numero_conta: { type: String, require: true },
  valor: { type: Number, required: true },
});

const Withdraw = mongoose.model('Withdraw', WithdrawSchema);
module.exports = Withdraw;
