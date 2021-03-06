"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("images_paths", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      imagePath: Sequelize.STRING,
      publisherName: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("images_paths");
  },
};
