const Sequelize = require("sequelize");
const db = require("../config/database");

const ParkingComment = db.define("parking_comments", {
  id: {
    type: Sequelize.NUMBER,
  },
  comment: {
    type: Sequelize.STRING,
  },
});

// Parking_id fk
Parking.belongsTo(Parking, { foreignKey: "parking_id", targetKey: "id" });

ParkingComment.sync().then(() => {
  console.log("ParkingComment table created");
});
module.exports = ParkingComment;
