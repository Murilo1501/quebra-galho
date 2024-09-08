'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aplications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aplications.init({
    id_user: DataTypes.NUMBER,
    id_project: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Aplications',
  });
  return Aplications;
};