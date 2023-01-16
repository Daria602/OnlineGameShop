const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');



const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => {
        const gameType = require('./gameType');
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
            },
            games: {
                type: new GraphQLList(gameType),
                resolve: async (user) => {
                    return await user.getGames();
                }
            }
        })
    }
});

module.exports = userType;

