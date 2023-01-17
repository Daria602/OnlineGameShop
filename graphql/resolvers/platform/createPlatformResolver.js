const models = require("../../../models");
module.exports = async (source, { platformName}, { tokenPayload }) => {
    // if(!tokenPayload) {
    //     return null;
    // }

    const platform = await models.Platform.create({
        platformName,
    });

    return platform;
}