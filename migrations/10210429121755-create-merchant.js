"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("merchants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      merchantId: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true,
      },
      userEmailAddress: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      points: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("merchants");
  },
};
