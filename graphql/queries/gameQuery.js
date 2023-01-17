const { GraphQLNonNull, GraphQLID} = require("graphql");
const models = require("../../models");
const gameType = require("../types/gameType");

module.exports = {
  type: gameType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }
    
    return models.Game.findByPk(id);
  }
}
