const producer = require('./producer.model');
const product = require('./product.model');
const category = require('./category.model');
const productCategory = require('./product-category.model');

product.belongsTo(producer, { foreignKey: 'id_producer' });

producer.hasMany(product, { foreignKey: 'id_producer' });

category.belongsToMany(product, {
  foreignKey: 'id_category',
  through: productCategory,
});

product.belongsToMany(category, {
  foreignKey: 'id_product',
  through: productCategory,
});

module.exports = {
  product,
  producer,
  category,
};
