const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");

const ParkingPicture = db.define("parking_pictures", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  picture: {
    type: Sequelize.INTEGER,
  },
});

// Parking_id fk
ParkingPicture.belongsTo(Parking, {
  // foreignKey: "parking_id",
  // targetKey: "id",
});

ParkingPicture.sync().then(() => {
  console.log("ParkingComment table created");
});
module.exports = ParkingPicture;
