"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("parkings", "owner", {
      type: Sequelize.STRING,
      references: {
        model: "merchants",
        key: "userEmailAddress",
      },
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.removeColumn("parkings", "owner");
  },
};
