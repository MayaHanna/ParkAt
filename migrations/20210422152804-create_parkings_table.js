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
      isPrivate: Sequelize.BOOLEAN,
      address: Sequelize.STRING,
      description: Sequelize.STRING,
      size: {
        type: Sequelize.ENUM,
        values: ["Small", "Big"],
      },
      lat: Sequelize.FLOAT,
      lng: Sequelize.FLOAT,
      // status: {
      //   type: Sequelize.ENUM,
      //   values: ["free", "taken", "unknown"],
      // },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("parkings");
  },
};
