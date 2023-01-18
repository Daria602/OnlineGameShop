const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }
    const {
        id,
        publisherName,
    } = args;

    await models.Platform.update({
        publisherName
    }, 
    {
        where: {
            id
        }
    });

    return models.Publisher.findByPk(id);
}