const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("./User");

const FreeParkingArea = db.define("free_parking_areas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  parkings_count: {
    type: Sequelize.INTEGER,
  },
});

// Reporter fk
FreeParkingArea.belongsTo(User, { foreignKey: "reporter" });

FreeParkingArea.sync().then(() => {
  console.log("FreeParkingArea table created");
});
module.exports = FreeParkingArea;
