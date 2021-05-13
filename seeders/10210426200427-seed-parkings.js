"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parkings", [
      {
        isPrivate: true,
        address: "לכיש 34, שוהם",
        description: "חניה מטורפת",
        size: "Big",
        lat: 32.02536958076407,
        lng: 34.769403040079816,
        owner: "Tomedry7@gmail.com",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parkings", null, {});
  },
};
