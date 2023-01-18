
const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const platformType = require("../../types/platformType");
const createPlatformResolver = require('../../resolvers/platform/createPlatformResolver');

module.exports = {
  type: platformType,
  args: {
    platformName: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: createPlatformResolver,
}