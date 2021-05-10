"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("parking_offers", "owner", {
        type: Sequelize.STRING,
        references: {
          model: "merchants",
          key: "userEmailAddress",
        },
      }),
      queryInterface.addColumn("parking_offers", "parkingId", {
        type: Sequelize.INTEGER,
        references: {
          model: "parkings",
          key: "id",
        },
      }),
      queryInterface.addColumn("parking_offers", "client", {
        type: Sequelize.STRING,
        references: {
          model: "merchants",
          key: "userEmailAddress",
        },
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("parking_offers", "owner"),
      queryInterface.removeColumn("parking_offers", "parkingId"),
      queryInterface.removeColumn("parking_offers", "client"),
    ];
  },
};
