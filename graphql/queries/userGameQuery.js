const { GraphQLList } = require("graphql");
const userGameType = require("../types/userGameType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(userGameType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.UserGame.findAll();
  }
}