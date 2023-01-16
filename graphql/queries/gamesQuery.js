const { GraphQLList } = require("graphql");
const gameType = require("../types/gameType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(gameType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Game.findAll();
  }
}