"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parking_comments", [
      {
        content: "חניה משוגעת",
        publisher: "Tomedry7@gmail.com",
        publisherName: "מאיה חנה",
        rating: 1,
        parkingId: 6,
      },
      {
        content: "חצי קלאץ'",
        publisher: "Tomedry7@gmail.com",
        publisherName: "פז רשף",
        rating: 2,
        parkingId: 6,
      },
      {
        content: "לא הצלחתי להיכנס",
        publisher: "Tomedry7@gmail.com",
        publisherName: "ג'וליטה מולוקנדוב",
        rating: 4,
        parkingId: 6,
      },
      {
        content: "מיקום אש",
        publisher: "Tomedry7@gmail.com",
        publisherName: "טום אדרי",
        rating: 3,
        parkingId: 6,
      },
      {
        content: "עדיף למות",
        publisher: "Tomedry7@gmail.com",
        publisherName: "טום אדרי",
        rating: 2,
        parkingId: 6,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parking_comments", null, {});
  },
};
