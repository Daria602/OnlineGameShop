const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
} = require("graphql");

const deletePublisherResolver = require('../../resolvers/publisher/deletePublisherResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve: deletePublisherResolver
}