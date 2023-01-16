const { GraphQLObjectType } = require('graphql');

const userQuery = require('./queries/userQuery');
const gamesQuery = require('./queries/gamesQuery')
const userGameQuery = require('./queries/userGameQuery')


const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: userQuery,
        games: gamesQuery,
        userGame: userGameQuery
    }
});

module.exports = queryType;