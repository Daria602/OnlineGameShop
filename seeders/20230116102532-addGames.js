'use strict';

const { 
  randProductName
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const games = [];
    
    for(let i = 0; i < 10; i++) {
        games.push({
            title: randProductName(),
            createdAt: new Date(),
            updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Games', games, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Games', null, {});
    
  }
};
