const Sequelize = require("sequelize");
const db = require("../config/database");

const ParkingPicture = db.define("parking_pictures", {
  id: {
    type: Sequelize.NUMBER,
  },
  picture: {
    type: Sequelize.NUMBER,
  },
});

// Parking_id fk
Parking.belongsTo(Parking, { foreignKey: "parking_id", targetKey: "id" });

ParkingComment.sync().then(() => {
  console.log("ParkingComment table created");
});
module.exports = ParkingComment;
