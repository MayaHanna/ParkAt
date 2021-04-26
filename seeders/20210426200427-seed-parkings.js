"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("parkings", [
      {
        is_private: true,
        address: "לכיש 34, שוהם",
        description: "חניה מטורפת",
        size: "small_car",
        status: "free",
        owner: 3,
      },
      {
        is_private: true,
        address: "שדרות קוגל 25, חולון",
        description: "חניה טירוף",
        size: "big_car",
        status: "free",
        owner: 4,
      },
      {
        is_private: true,
        address: "איפשהו באיזור",
        description: "חניה משהו משהן",
        size: "truck",
        status: "taken",
        owner: 5,
      },
      {
        is_private: true,
        address: "איפשהו בכיוון מזרח",
        description: "חניה שהיא משהו לא נורמלי",
        size: "motorcycle",
        status: "unknown",
        owner: 6,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parkings", null, {});
  },
};
