'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const platforms = await models.Platform.findAll();
    const games = await models.Game.findAll();

    const platformGames = [];

    // Each game has the first platform
    games.forEach(game => {
        platformGames.push({
            platformId: platforms[0].id,
            gameId: game.id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    });

    await queryInterface.bulkInsert('PlatformGames', platformGames, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('PlatformGames', null, {});

  }
};
