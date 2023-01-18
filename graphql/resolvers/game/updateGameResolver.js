const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }
    const {
        id,
        title
    } = args;

    await models.Game.update({
        email,
        title
    }, 
    {
        where: {
            id
        }
    });

    return models.Game.findByPk(id);
}