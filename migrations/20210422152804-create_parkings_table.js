"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("parkings", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      is_private: Sequelize.BOOLEAN,
      address: Sequelize.STRING,
      description: Sequelize.STRING,
      size: {
        type: Sequelize.ENUM,
        values: ["motorcycle", "small_car", "big_car", "truck", "bus"],
      },
      status: {
        type: Sequelize.ENUM,
        values: ["free", "taken", "unknown"],
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("parkings");
  },
};
