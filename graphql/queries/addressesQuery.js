const { GraphQLList } = require("graphql");
const addressType = require("../types/addressType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(addressType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Address.findAll();
  }
}