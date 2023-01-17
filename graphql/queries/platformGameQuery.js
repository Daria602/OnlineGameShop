const { GraphQLList } = require("graphql");
const platformGameType = require("../types/platformGameType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(platformGameType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.PlatformGame.findAll();
  }
}