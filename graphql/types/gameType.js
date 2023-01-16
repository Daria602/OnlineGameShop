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
                    game.getUsers();
                }
            }
        })
    }
});

module.exports = gameType;


