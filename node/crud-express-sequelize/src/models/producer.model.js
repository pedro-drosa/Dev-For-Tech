const { DataTypes } = require('sequelize');
const connection = require('../database');

const producer = connection.define(
  'Producer',
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
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  { tableName: 'producers', timestamps: false },
);

module.exports = producer;
