'use strict';

const { randPlatformName } = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const platforms = [];
    const predefinedPlatforms = ["Nintendo", "PC", "PlayStation", "XBOX"];
    
    for(let i = 0; i < predefinedPlatforms.length; i++) {
        platforms.push({
        platformName: predefinedPlatforms[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Platforms', platforms, {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Platforms', null, {});

  }
};
