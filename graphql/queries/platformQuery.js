const { GraphQLNonNull, GraphQLID} = require("graphql");
const models = require("../../models");
const platformType = require("../types/platformType");

module.exports = {
  type: platformType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    
    return models.Platform.findByPk(id);
  }
}
