const { DataTypes } = require('sequelize');
const connection = require('../database');

const productCategory = connection.define(
  'ProductCategory',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    id_category: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  { tableName: 'products_categories', timestamps: false },
);

module.exports = productCategory;
