"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("parking_pictures", "parkingId", {
      type: Sequelize.INTEGER,
      references: {
        model: "parkings",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("parking_pictures", "parkingId");
  },
};
