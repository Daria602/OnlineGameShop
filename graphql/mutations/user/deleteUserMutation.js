const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
} = require("graphql");

const deleteUserResolver = require('../../resolvers/user/deleteUserResolver');

module.exports = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: deleteUserResolver
};