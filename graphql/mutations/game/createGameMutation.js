const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} = require("graphql");
const gameType = require("../../types/gameType");
const createGameResolver = require('../../resolvers/game/createGameResolver');

module.exports = {
    type: gameType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        publisherId: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve: createGameResolver
}