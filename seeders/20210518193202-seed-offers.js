"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parking_offers", [
      {
        price: 20,
        start: new Date(),
        end: new Date(),
        status: "open",
        canBePermanent: false,
        owner: "Tomedry7@gmail.com",
        parkingId: 6,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parking_offers", null, {});
  },
};
