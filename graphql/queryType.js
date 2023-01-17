const { GraphQLObjectType } = require('graphql');

const userQuery = require('./queries/userQuery');
const usersQuery = require('./queries/usersQuery');
const gameQuery = require('./queries/gameQuery')
const gamesQuery = require('./queries/gamesQuery')
const userGameQuery = require('./queries/userGameQuery')
const platformQuery = require('./queries/platformQuery')
const platformsQuery = require('./queries/platformsQuery')
const publisherQuery = require('./queries/publisherQuery')
const publishersQuery = require('./queries/publishersQuery')
const platformGameQuery = require('./queries/platformGameQuery')
const addressQuery = require('./queries/addressQuery')
const addressesQuery = require('./queries/addressesQuery')

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: userQuery,
        users: usersQuery,
        game: gameQuery,
        games: gamesQuery,
        userGame: userGameQuery,
        platform: platformQuery,
        platforms: platformsQuery,
        publisher: publisherQuery,
        publishers: publishersQuery,
        platformGame: platformGameQuery,
        address: addressQuery,
        addresses: addressesQuery,
    }
});

module.exports = queryType;