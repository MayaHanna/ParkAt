"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("parking_ratings", "parkingId", {
      type: Sequelize.INTEGER,
      references: {
        model: "parkings",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("parking_ratings", "parkingId");
  },
};
