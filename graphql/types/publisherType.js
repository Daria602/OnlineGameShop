const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');



const publisherType = new GraphQLObjectType({
    name: 'Publisher',
    fields: () => {
        const gameType = require('./gameType');
        return ({
            id: {
                type: GraphQLID
            },
            companyName: {
                type: GraphQLString
            }
        })
    }
});

module.exports = publisherType;

