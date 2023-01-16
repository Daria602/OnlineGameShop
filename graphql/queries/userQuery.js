const { GraphQLNonNull, GraphQLID} = require("graphql");
const models = require("../../models");
const userType = require("../types/userType");

module.exports = {
  type: userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    
    return models.User.findByPk(id);
  }
}
