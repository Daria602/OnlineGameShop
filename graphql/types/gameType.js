const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');

const gameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => {
        const userType = require('./userType');
        const publisherType = require('./publisherType');
        return ({
            id: {
                type: GraphQLID
            },
            title: {
                type: GraphQLString
            },
            ownedBy: {
                type: new GraphQLList(userType),
                resolve: async (game) => {
                    return await game.getUsers();
                }
            },
            publishedBy: {
                type: publisherType,
                resolve: async (game) => {
                    return await game.getPublisher();
                }
            }
        })
    }
});

module.exports = gameType;


