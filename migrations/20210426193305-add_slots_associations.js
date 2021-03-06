"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("slots", "incomingUser", {
        type: Sequelize.STRING,
        references: {
          model: "merchants",
          key: "userEmailAddress",
        },
        allowNull: true,
      }),
      queryInterface.addColumn("slots", "publicParkingOfferId", {
        type: Sequelize.INTEGER(11),
        references: {
          model: "parking_offers",
        },
        allowNull: false,
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("slots", "incomingUser"),
      queryInterface.removeColumn("slots", "publicParkingOfferId"),
    ];
  },
};
