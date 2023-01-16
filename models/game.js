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