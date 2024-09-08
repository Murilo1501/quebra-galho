'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       // Um projeto pertence a um usuário
       Project.belongsTo(models.User, {
        foreignKey: 'id_ownerProject',  // Chave estrangeira em Project
        as: 'owner'  // Nome da associação
      });
    }
  }
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    wage: DataTypes.STRING,
    id_ownerProject: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};