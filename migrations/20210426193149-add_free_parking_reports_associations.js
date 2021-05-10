"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("free_parking_reports", "parkingId", {
      type: Sequelize.INTEGER,
      references: {
        model: "parkings",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("free_parking_reports", "parkingId");
  },
};
