const product = require('../models/product.model');

module.exports = {
  listProducts: async (request, response) => {
    const products = await product.findAll();
    return response.status(200).json(products);
  },

  createProduct: async (request, response) => {
    const { name, price, quantity } = request.body;
    const newProduct = await product.create({ name, price, quantity });
    response.status(201).json(newProduct);
  },
};
