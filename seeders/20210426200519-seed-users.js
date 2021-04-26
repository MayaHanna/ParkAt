"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        full_name: "Tom Edry",
        created_at: new Date(),
        address: "לכיש 34, שוהם",
        phone_number: "0525877520",
      },
      {
        full_name: "Juliet Mulokandov",
        created_at: new Date(),
        address: "שדרות קוגל 25, חולון",
        phone_number: "0522353161",
      },
      {
        full_name: "Paz Reshef",
        created_at: new Date(),
        address: "לא יודע כתובת",
        phone_number: "0543490730",
      },
      {
        full_name: "Maya Hanna",
        created_at: new Date(),
        address: "לא יודע כתובת",
        phone_number: "0542606888",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("users", null, {});
  },
};
