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
      // queryInterface.addColumn("private_parking_offers", "merchant_id", {
      //   type: Sequelize.STRING(50),
      //   references: {
      //     model: "merchants",
      //     key: "merchant_id",
      //   },
      // }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("private_parking_offers", "creditor"),
      queryInterface.removeColumn("private_parking_offers", "customer"),
      queryInterface.removeColumn("private_parking_offers", "parking_id"),
      // queryInterface.removeColumn("private_parking_offers", "merchant_id"),
    ];
  },
};
