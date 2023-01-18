const {
    GraphQLNonNull,
    GraphQLString, GraphQLID, GraphQLInt
  } = require("graphql");
const addressType = require("../../types/addressType");
const updateAddressResolver = require('../../resolvers/address/updateAddressResolver');

module.exports = {
  type: addressType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    cityName: {
      type: GraphQLString,
    },
    streetName: {
      type: GraphQLString,
    },
    zipCode: {
      type: GraphQLString,
    },
    publisherId: {
        type: GraphQLInt,
    },
  },
  resolve: updateAddressResolver,
}