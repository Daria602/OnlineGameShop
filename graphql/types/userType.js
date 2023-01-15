const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require('graphql');


const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => {
        return ({
            id: {
                type: GraphQLID
            },
            email: {
                type: GraphQLString
            },
            firstName: {
                type: GraphQLString
            },
            lastName: {
                type: GraphQLString
            }
        })
    }
});

module.exports = userType;