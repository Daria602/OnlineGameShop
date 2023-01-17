'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Platform.belongsToMany(models.Game, {
        through: models.PlatformGame,
        foreignKey: 'platformId'
      });
    }
  }
  Platform.init({
    platformName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Platform',
  });
  return Platform;
};