const { GraphQLNonNull, GraphQLID} = require("graphql");
const models = require("../../models");
const publisherType = require("../types/publisherType");

module.exports = {
  type: publisherType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    
    return models.Publisher.findByPk(id);
  }
}
