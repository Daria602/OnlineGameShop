'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlatformGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.PlatformGame.belongsTo(models.Platform, {foreignKey: 'platformId'});
      models.PlatformGame.belongsTo(models.Game, {foreignKey: 'gameId'});
    }
  }
  PlatformGame.init({
    platformId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlatformGame',
  });
  return PlatformGame;
};