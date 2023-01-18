
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
  } = require("graphql");
const addressType = require("../../types/addressType");
const createAddressResolver = require('../../resolvers/address/createAddressResolver');

module.exports = {
  type: addressType,
  args: {
    cityName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    streetName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    zipCode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    publisherId: {
        type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: createAddressResolver,
}