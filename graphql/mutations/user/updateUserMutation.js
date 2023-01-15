const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = require("graphql");

const userType = require("../../types/userType");
const updateUserResolver = require('../../resolvers/updateUserResolver');

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
        },
        addressId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: updateUserResolver,
}