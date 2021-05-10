"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Tom Edry",
        createdAt: new Date(),
        address: "לכיש 34, שוהם",
        phoneNumber: "0525877520",
      },
      {
        fullName: "Juliet Mulokandov",
        createdAt: new Date(),
        address: "שדרות קוגל 25, חולון",
        phoneNumber: "0522353161",
      },
      {
        fullName: "Paz Reshef",
        createdAt: new Date(),
        address: "לא יודע כתובת",
        phoneNumber: "0543490730",
      },
      {
        fullName: "Maya Hanna",
        createdAt: new Date(),
        address: "לא יודע כתובת",
        phoneNumber: "0542606888",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("users", null, {});
  },
};
