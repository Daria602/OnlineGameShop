const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');

const addressType = new GraphQLObjectType({
    name: 'Address',
    fields: () => {
        const publisherType = require('./publisherType');
        return ({
            id: {
                type: GraphQLID
            },
            cityName: {
                type: GraphQLString
            },
            streetName: {
                type: GraphQLString
            },
            zipCode: {
                type: GraphQLString
            },
            publisher: {
                type: publisherType,
                resolve: async (address) => {
                    return await address.getPublisher();
                }
            }
        })
    }
});

module.exports = addressType;


