const Sequelize = require("sequelize");
const db = require("../config/database");

const ParkingRating = db.define("parking_ratings", {
  id: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  parking_id: {
    type: Sequelize.NUMBER,
  },
  rating: {
    type: Sequelize.NUMBER,
  },
});

ParkingRating.sync().then(() => {
  console.log("ParkingRating table created");
});
module.exports = ParkingRating;
