'use strict';
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 8;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserAuths', [
      {
        username: 'admin',
        password: await bcrypt.hash('adminadmin', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};