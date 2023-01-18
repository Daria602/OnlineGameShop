const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }
    const {
        id,
        cityName,
        streetName,
        zipCode, 
        publisherId
    } = args;

    await models.Address.update({
        cityName,
        streetName,
        zipCode, 
        publisherId
    }, 
    {
        where: {
            id
        }
    });

    return models.Address.findByPk(id);
}