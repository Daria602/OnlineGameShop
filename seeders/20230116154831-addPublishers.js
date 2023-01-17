'use strict';

const { randCompanyName } = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const publishers = [];
    
    for(let i = 0; i < 10; i++) {
        publishers.push({
			companyName: randCompanyName(),
			createdAt: new Date(),
			updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert('Publishers', publishers, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Publishers', null, {});

  }
};
