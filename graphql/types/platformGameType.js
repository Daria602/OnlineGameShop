const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt
} = require('graphql');



const platformGameType = new GraphQLObjectType({
    name: 'PlatformGame',
    fields: () => {
        const gameType = require('./gameType');
        const platformType = require('./platformType');
        return ({
            platform: {
                type: platformType,
                resolve: async (platformGame) => { return await platformGame.getPlatform(); }
            },
            game: {
                type: gameType,
                resolve: async (platformGame) => { return await platformGame.getGame(); }
            }
        })
    }
});

module.exports = platformGameType;

