const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = require("graphql");

const userType = require("../../types/userType");
const updateUserResolver = require('../../resolvers/user/updateUserResolver');

module.exports = {
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: updateUserResolver,
}