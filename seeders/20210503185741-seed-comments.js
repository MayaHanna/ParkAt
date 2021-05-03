"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parking_comments", [
      {
        comment: "חניה משוגעת",
        parkingId: 2,
      },
      {
        comment: "חצי קלאץ'",
        parkingId: 2,
      },
      {
        comment: "לא הצלחתי להיכנס",
        parkingId: 4,
      },
      {
        comment: "מיקום אש",
        parkingId: 2,
      },
      {
        comment: "עדיף למות",
        parkingId: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("users", null, {});
  },
};
