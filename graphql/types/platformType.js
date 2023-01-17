const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');

const platformType = new GraphQLObjectType({
    name: 'Platform',
    fields: () => {
        const gameType = require('./gameType');
        return ({
            id: {
                type: GraphQLID
            },
            platformName: {
                type: GraphQLString
            },
            games: {
                type: new GraphQLList(gameType),
                resolve: async (platform) => {
                    return await platform.getGames();
                }
            }
        })
    }
});

module.exports = platformType;


