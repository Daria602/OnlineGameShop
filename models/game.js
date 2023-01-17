'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      models.Game.belongsToMany(models.User, {
        through: models.UserGame,
        foreignKey: 'gameId'
      });

      models.Game.belongsToMany(models.Platform, {
        through: models.PlatformGame,
        foreignKey: 'gameId'
      });

      models.Game.belongsTo(models.Publisher, {foreignKey: 'publisherId'});
    }
  }
  Game.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};