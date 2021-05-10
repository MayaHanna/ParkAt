"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("private_parking_offers", "client", {
        type: Sequelize.STRING,
        references: {
          model: "merchants",
          key: "userEmailAddress",
        },
        allowNull: true,
        unique: true,
      }),
      queryInterface.addColumn("private_parking_offers", "merchantId", {
        type: Sequelize.STRING(200),
        references: {
          model: "merchants",
          key: "merchantId",
        },
        allowNull: false,
      }),
      queryInterface.addColumn("private_parking_offers", "parkingId", {
        type: Sequelize.INTEGER,
        references: {
          model: "parkings",
          key: "id",
        },
        allowNull: false,
      }),
      // queryInterface.addColumn("private_parking_offers", "merchantId", {
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
      queryInterface.removeColumn("private_parking_offers", "merchantId"),
      queryInterface.removeColumn("private_parking_offers", "client"),
      queryInterface.removeColumn("private_parking_offers", "parkingId"),
      // queryInterface.removeColumn("private_parking_offers", "merchantId"),
    ];
  },
};
