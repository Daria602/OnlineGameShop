'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PlatformGames', {
      platformId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: "Platforms"
          },
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'cascade'
      },
      gameId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: "Games"
          },
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PlatformGames');
  }
};