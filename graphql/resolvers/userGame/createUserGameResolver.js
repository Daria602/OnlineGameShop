const models = require("../../../models");
module.exports = async (source, { userId, gameId }, { tokenPayload }) => {
    // if(!tokenPayload) {
    //     return null;
    // }

    const userGame = await models.UserGame.create({
        userId,
        gameId
    });

    return userGame;
}