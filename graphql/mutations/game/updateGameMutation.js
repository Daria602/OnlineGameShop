const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = require("graphql");

const gameType = require("../../types/gameType");
const updateGameResolver = require('../../resolvers/game/updateGameResolver');

module.exports = {
    type: gameType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: updateGameResolver
}