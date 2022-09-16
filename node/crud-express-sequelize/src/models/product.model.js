const { DataTypes } = require('sequelize');
const connection = require('../database');

const product = connection.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producer: {
      type: DataTypes.INTEGER,
      references: {
        model: 'producers',
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
  { tableName: 'products', timestamps: false },
);

module.exports = product;
