const { GraphQLNonNull, GraphQLID} = require("graphql");
const models = require("../../models");
const addressType = require("../types/addressType");

module.exports = {
  type: addressType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    
    return models.Address.findByPk(id);
  }
}
