const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt
} = require('graphql');



const userGameType = new GraphQLObjectType({
    name: 'UserGame',
    fields: () => {
        const gameType = require('./gameType');
        const userType = require('./userType');
        return ({
            user: {
                type: userType,
                resolve: async (userGame) => { return await userGame.getUser(); }
            },
            game: {
                type: gameType,
                resolve: async (userGame) => { return await userGame.getGame(); }
            }
        })
    }
});

module.exports = userGameType;

