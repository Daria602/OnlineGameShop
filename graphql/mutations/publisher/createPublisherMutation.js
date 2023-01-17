
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
  } = require("graphql");
  const publisherType = require("../../types/publisherType");
  const createPublisherResolver = require('../../resolvers/publisher/createPublisherResolver');

  module.exports = {
    type: publisherType,
    args: {
      publisherName: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: createPublisherResolver,
  }