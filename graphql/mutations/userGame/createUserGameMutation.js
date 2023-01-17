const {
    GraphQLNonNull,
    GraphQLInt,
} = require("graphql");
const userGameType = require("../../types/userGameType");
const createUserGameResolver = require("../../resolvers/userGame/createUserGameResolver");

module.exports = {
    type: userGameType,
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        gameId: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve: createUserGameResolver,
}