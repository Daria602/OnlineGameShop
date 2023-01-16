const {
    GraphQLNonNull,
    GraphQLString
} = require("graphql");
const gameType = require("../../types/gameType");
const createGameResolver = require('../../resolvers/game/createGameResolver');

module.exports = {
    type: gameType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: createGameResolver
}