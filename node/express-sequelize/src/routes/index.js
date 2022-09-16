const { Router } = require('express');
const productController = require('../controllers/product.controller');

const routes = Router();

routes.get('/product', productController.listProducts);
routes.post('/product', productController.createProduct);

module.exports = routes;
