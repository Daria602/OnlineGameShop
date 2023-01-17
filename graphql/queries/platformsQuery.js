const { GraphQLList } = require("graphql");
const platformsType = require("../types/platformType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(platformsType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Platform.findAll();
  }
}
