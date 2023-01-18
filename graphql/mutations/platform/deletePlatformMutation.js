const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
} = require("graphql");

const deletePlatformResolver = require('../../resolvers/platform/deletePlatformResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve: deletePlatformResolver
}