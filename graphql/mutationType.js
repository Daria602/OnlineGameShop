const { GraphQLObjectType } = require('graphql');

const createUserMutation = require('./mutations/user/createUserMutation');
const updateUserMutation = require('./mutations/user/updateUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');

const createGameMutation = require('./mutations/game/createGameMutation');
const updateGameMutation = require('./mutations/game/updateGameMutation');
const deleteGameMutation = require('./mutations/game/deleteGameMutation');

const createAddressMutation = require('./mutations/address/createAddressMutation');
const updateAddressMutation = require('./mutations/address/updateAddressMutation');
const deleteAddressMutation = require('./mutations/address/deleteAddressMutation');

const createPlatformMutation = require('./mutations/platform/createPlatformMutation');
const updatePlatformMutation = require('./mutations/platform/updatePlatformMutation');
const deletePlatformMutation = require('./mutations/platform/deletePlatformMutation');

const createPublisherMutation = require('./mutations/publisher/createPublisherMutation');
const updatePublisherMutation = require('./mutations/publisher/updatePublisherMutation');
const deletePublisherMutation = require('./mutations/publisher/deletePublisherMutation');


const loginMutation = require('./mutations/loginMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUserMutation,
        updateUser: updateUserMutation,
        deleteUser: deleteUserMutation,
        createGame: createGameMutation,
        updateGame: updateGameMutation,
        deleteGame: deleteGameMutation,
        createAddress: createAddressMutation,
        updateAddress: updateAddressMutation,
        deleteAddress: deleteAddressMutation,
        createPlatform: createPlatformMutation,
        updatePlatform: updatePlatformMutation,
        deletePlatform: deletePlatformMutation,
        createPublisher: createPublisherMutation,
        updatePublisher: updatePublisherMutation,
        deletePublisher: deletePublisherMutation,
        login: loginMutation
    }
});

module.exports = mutationType;