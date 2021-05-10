"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parkings", [
      {
        isPrivate: true,
        address: "לכיש 34, שוהם",
        description: "חניה מטורפת",
        size: "Big",
        owner: "Tomedry7@gmail.com",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parkings", null, {});
  },
};
