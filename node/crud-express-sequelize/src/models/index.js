const producer = require('./producer.model');
const product = require('./product.model');

product.belongsTo(producer, { foreignKey: 'id_producer' });
producer.hasMany(product, { foreignKey: 'id_producer' });

module.exports = {
  product,
  producer,
};
