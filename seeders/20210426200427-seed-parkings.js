"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parkings", [
      {
        isPrivate: true,
        address: "לכיש 34, שוהם",
        description: "חניה מטורפת",
        size: "small_car",
        status: "free",
        owner: 1,
      },
      {
        isPrivate: true,
        address: "שדרות קוגל 25, חולון",
        description: "חניה טירוף",
        size: "big_car",
        status: "free",
        owner: 2,
      },
      {
        isPrivate: true,
        address: "איפשהו באיזור",
        description: "חניה משהו משהן",
        size: "truck",
        status: "taken",
        owner: 3,
      },
      {
        isPrivate: true,
        address: "איפשהו בכיוון מזרח",
        description: "חניה שהיא משהו לא נורמלי",
        size: "motorcycle",
        status: "unknown",
        owner: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parkings", null, {});
  },
};
