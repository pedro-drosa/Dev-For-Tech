const { product, producer } = require('../models');

module.exports = {
  listProducts: async (request, response) => {
    const products = await product.findAll({ include: producer });
    return response.status(200).json(products);
  },

  createProduct: async (request, response) => {
    const { name, price, quantity } = request.body;
    const newProduct = await product.create({ name, price, quantity });
    return response.status(201).json(newProduct);
  },

  deleteProduct: async (request, response) => {
    const { id } = request.params;
    product.destroy({ where: { id } });
    return response.status(204).send();
  },

  updateProduct: async (request, response) => {
    const { id } = request.params;
    const { name, price, quantity } = request.body;
    await product.update({ name, price, quantity }, { where: { id } });
    return response.status(200).json({ id, name, price, quantity });
  },
};
