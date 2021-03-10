const Sequelize = require("sequelize");
const db = require("../config/database");

const ParkingRating = db.define("parking_ratings", {
  id: {
    type: Sequelize.NUMBER,
  },
  rating: {
    type: Sequelize.NUMBER,
  },
});

// Parking_id fk
Parking.belongsTo(Parking, { foreignKey: "parking_id", targetKey: "id" });

ParkingRating.sync().then(() => {
  console.log("ParkingRating table created");
});
module.exports = ParkingRating;
