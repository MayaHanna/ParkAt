"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("private_parking_offers", "creditor", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("private_parking_offers", "customer", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("private_parking_offers", "parking_id", {
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
      queryInterface.removeColumn("private_parking_offers", "creditor"),
      queryInterface.removeColumn("private_parking_offers", "customer"),
      queryInterface.removeColumn("private_parking_offers", "parking_id"),
    ];
  },
};
