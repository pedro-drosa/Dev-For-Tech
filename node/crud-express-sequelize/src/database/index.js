const { Sequelize } = require('sequelize');

const DATABASE_CONFIG = {
  dialect: 'mysql',
  host: 'localhost',
  database: 'sequelize_store',
  username: 'root',
  password: 'mysql',
  port: 3306,
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: true,
  },
};

const connection = new Sequelize(DATABASE_CONFIG);

(async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = connection;
