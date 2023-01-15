const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
    const {
        id,
        email,
        firstName,
        lastName,
    } = args;

    if(!tokenPayload) {
        return null;
    }

    await models.User.update({
        email,
        firstName,
        lastName
    }, 
    {
        where: {
            id
        }
    });

    return models.User.findByPk(id);
}