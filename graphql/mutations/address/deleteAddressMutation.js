
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLID,
} = require("graphql");

const deleteAddressResolver = require('../../resolvers/address/deleteAddressResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve: deleteAddressResolver,
}