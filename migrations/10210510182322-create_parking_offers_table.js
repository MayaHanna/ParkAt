"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("parking_offers", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      price: Sequelize.INTEGER,
      start: Sequelize.DATE,
      end: Sequelize.DATE,
      status: Sequelize.STRING,
      isPrivate: Sequelize.BOOLEAN,
      canBePermanent: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("parking_offers");
  },
};
