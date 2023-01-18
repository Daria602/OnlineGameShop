const models = require("../../../models");
module.exports = async (source, { email, firstName, lastName }, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }

    const user = await models.User.create({
        email,
        firstName,
        lastName
    });

    return user;
}