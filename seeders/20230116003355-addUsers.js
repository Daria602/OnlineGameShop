'use strict';
const { 
  randFirstName, 
  randLastName, 
  randEmail 
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];
    
    for(let i = 0; i < 10; i++) {
        users.push({
			email: randEmail(),
			firstName: randFirstName(),
			lastName: randLastName(),
			createdAt: new Date(),
			updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert('Users', users, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});

  }
};