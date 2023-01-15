const { GraphQLObjectType } = require('graphql');

const createUserMutation = require('./mutations/user/createUserMutation');
const updateUserMutation = require('./mutations/user/updateUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');
//const loginMutation = require('./mutations/loginMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUserMutation,
        updateUser: updateUserMutation,
        deleteUser: deleteUserMutation
    }
});

module.exports = mutationType;