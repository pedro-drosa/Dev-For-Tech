const mongoose = require('mongoose');

const DB_URI =
  'mongodb://mongo:mongo@localhost:27017/digitalbank?authSource=admin';

const connectToDatabase = () => {
  try {
    return mongoose.connect(DB_URI, { autoIndex: true }, () =>
      console.log('conectado ao banco de dados'),
    );
  } catch (error) {
    throw Error('Erro na conexão com o banco');
  }
};

module.exports = connectToDatabase;
