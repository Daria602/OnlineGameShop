'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        const users = await models.User.findAll();
        const games = await models.Game.findAll();

        const userGames = [];

        // Each user has the first and the second game
        users.forEach(user => {
            userGames.push({
                userId: user.id,
                gameId: games[0].id,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        });

        users.forEach(user => {
            userGames.push({
                userId: user.id,
                gameId: games[1].id,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        });


        await queryInterface.bulkInsert('UserGames', userGames, {});
    },

    async down (queryInterface, Sequelize) {
    
        await queryInterface.bulkDelete('UserGames', null, {});
    }
};
