"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("parking_comments", "parkingId", {
        type: Sequelize.INTEGER,
        references: {
          model: "parkings",
          key: "id",
        },
      }),
      queryInterface.addColumn("parking_comments", "publisher", {
        type: Sequelize.STRING,
        references: {
          model: "merchants",
          key: "userEmailAddress",
        },
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("parking_comments", "parkingId");
  },
};
