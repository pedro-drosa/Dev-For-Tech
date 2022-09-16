module.exports = {
  listProducts: (request, response) => {
    response.json([
      { id: 1, name: 'Example One' },
      { id: 2, name: 'Example Two' },
    ]);
  },

  createProduct: (request, response) => {
    response.json(request.body);
  },
};
