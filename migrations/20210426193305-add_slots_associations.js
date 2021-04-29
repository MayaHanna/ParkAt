"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("slots", "outgoing_user", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("slots", "incoming_user", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("slots", "public_parking_offer", {
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
      queryInterface.removeColumn("slots", "public_parking_offer"),
    ];
  },
};
