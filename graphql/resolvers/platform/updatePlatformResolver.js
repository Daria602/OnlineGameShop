const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }
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