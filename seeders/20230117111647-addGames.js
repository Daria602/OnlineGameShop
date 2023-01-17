'use strict';
const models = require('../models');

const { 
  randProductName
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const games = [];
    const publishers = await models.Publisher.findAll();
    
    for(let i = 0; i < 10; i++) {
        games.push({
            title: randProductName(),
            publisherId: publishers[i%publishers.length].id,
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
