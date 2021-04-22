"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("private_parking_offers", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      price: Sequelize.INTEGER(10),
      start: Sequelize.TIME,
      end: Sequelize.TIME,
      // need to set it up to "end"
      can_be_permanent: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("private_parking_offers");
  },
};
