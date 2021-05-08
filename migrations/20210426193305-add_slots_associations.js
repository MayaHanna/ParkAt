"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("slots", "outgoingUser", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("slots", "incomingUser", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("slots", "publicParkingOffer", {
        type: Sequelize.INTEGER,
        references: {
          model: "public_parking_offers",
          key: "id",
        },
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("slots", "outgoingUser"),
      queryInterface.removeColumn("slots", "incomingUser"),
      queryInterface.removeColumn("slots", "publicParkingOffer"),
    ];
  },
};
