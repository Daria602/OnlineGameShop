const models = require("../../../models");
module.exports = async (source, { cityName, streetName, zipCode, publisherId }, { tokenPayload }) => {
    // if(!tokenPayload) {
    //     return null;
    // }

    const address = await models.Address.create({
        cityName,
        streetName,
        zipCode, 
        publisherId
    });

    return address;
}