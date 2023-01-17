const { GraphQLList } = require("graphql");
const publishersType = require("../types/publisherType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(publishersType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Publisher.findAll();
  }
}
