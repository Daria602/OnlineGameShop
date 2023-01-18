const {
  GraphQLNonNull,
  GraphQLString, GraphQLID, GraphQLInt
} = require("graphql");
const platformType = require("../../types/platformType");
const updatePlatformResolver = require('../../resolvers/platform/updatePlatformResolver');

module.exports = {
  type: platformType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    platformName: {
      type: GraphQLString,
    }
  },
  resolve: updatePlatformResolver,
}