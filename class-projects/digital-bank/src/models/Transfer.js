const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
  data: { type: Date, require: true },
  numero_conta_origem: { type: String, require: true },
  numero_conta_destino: { type: String, require: true },
  valor: { type: Number, required: true },
});

const Transfer = mongoose.model('Transfer', TransferSchema);
module.exports = Transfer;
