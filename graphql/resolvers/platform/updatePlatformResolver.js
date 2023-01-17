const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
    const {
        id,
        platformName,
    } = args;

    await models.Platform.update({
        platformName
    }, 
    {
        where: {
            id
        }
    });

    return models.Platform.findByPk(id);
}