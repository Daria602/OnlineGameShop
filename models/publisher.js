'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Publisher.hasOne(models.Address, { foreignKey: 'publisherId'});
    }
  }
  Publisher.init({
    companyName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publisher',
  });
  return Publisher;
};