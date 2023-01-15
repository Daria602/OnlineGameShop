const {
    GraphQLNonNull,
    GraphQLString
} = require("graphql");
const userType = require("../../types/userType");
const createUserResolver = require('../../resolvers/createUserResolver');

module.exports = {
    type: userType,
    args: {
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
    resolve: createUserResolver
}