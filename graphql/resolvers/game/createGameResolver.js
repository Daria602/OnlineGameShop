const models = require("../../../models");
module.exports = async (source, { title }, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }

    const game = await models.Game.create({
        title
    });

    return game;
}