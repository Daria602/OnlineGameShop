const {
  GraphQLNonNull,
  GraphQLString, GraphQLID, GraphQLInt
} = require("graphql");
const publisherType = require("../../types/publisherType");
const updatePublisherResolver = require('../../resolvers/publisher/updatePublisherResolver');

module.exports = {
  type: publisherType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    publisherName: {
      type: GraphQLString,
    }
  },
  resolve: updatePublisherResolver
}