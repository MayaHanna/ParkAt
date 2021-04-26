"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("parking_comments", "parking_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "parkings",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("parking_comments", "parking_id");
  },
};
