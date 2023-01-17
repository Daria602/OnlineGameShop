'use strict';
const models = require('../models');

const { 
  randAddress
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addresses = [];
    const publishers = await models.Publisher.findAll();

    for(let i = 0; i < publishers.length; i++) {
      const generatedAdress = randAddress();
        addresses.push({
            cityName: generatedAdress.city,
            streetName: generatedAdress.street,
            zipCode: generatedAdress.zipCode, 
            publisherId: publishers[i].id,
            createdAt: new Date(),
            updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Addresses', addresses, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Addresses', null, {});

  }
};
