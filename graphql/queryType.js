const { GraphQLObjectType } = require('graphql');

const userQuery = require('./queries/userQuery');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: userQuery
    }
});

module.exports = queryType;