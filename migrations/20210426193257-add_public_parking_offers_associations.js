"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("public_parking_offers", "creditor", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("public_parking_offers", "parking_id", {
        type: Sequelize.INTEGER,
        references: {
          model: "parkings",
          key: "id",
        },
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("public_parking_offers", "creditor"),
      queryInterface.removeColumn("public_parking_offers", "parking_id"),
    ];
  },
};
