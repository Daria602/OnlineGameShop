const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
} = require("graphql");

const deleteGameResolver = require('../../resolvers/game/deleteGameResolver');

module.exports = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: deleteGameResolver
};