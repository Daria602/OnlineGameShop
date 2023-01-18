const models = require("../../../models");
module.exports = async (source, { publisherName }, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }

    const publisher = await models.Publisher.create({
        publisherName
    });

    return publisher;
}