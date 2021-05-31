"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("slots", [
      {
        start: new Date(),
        end: new Date(),
        incomingUser: "Tomedry7@gmail.com",
        publicParkingOffer: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("slots", null, {});
  },
};
