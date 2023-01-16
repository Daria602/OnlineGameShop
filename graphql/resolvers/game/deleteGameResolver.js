const models = require("../../../models");
module.exports = (source, { id }) => {
  return models.Game.destroy({
    where: {
      id
    }
  })
}