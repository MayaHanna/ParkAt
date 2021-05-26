"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("images_paths", "parkingId", {
        type: Sequelize.INTEGER,
        references: {
          model: "parkings",
          key: "id",
        },
        allowNull: false,
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn("images_paths", "parkingId")];
  },
};
