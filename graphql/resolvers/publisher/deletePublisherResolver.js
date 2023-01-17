const models = require("../../../models");
module.exports = (source, { id }) => {
  return models.Publisher.destroy({
    where: {
      id
    }
  })
}