const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");

const ParkingRating = db.define("parking_ratings", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

// Parking_id fk
ParkingRating.belongsTo(Parking, { as: "fk_parking" });

ParkingRating.sync().then(() => {
  console.log("ParkingRating table created");
});
module.exports = ParkingRating;
