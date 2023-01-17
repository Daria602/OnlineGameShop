const { GraphQLList } = require("graphql");
const usersType = require("../types/userType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(usersType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.User.findAll();
  }
}
