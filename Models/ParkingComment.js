const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");

const ParkingComment = db.define("parking_comments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  comment: {
    type: Sequelize.STRING,
  },
});

// Parking_id fk
ParkingComment.belongsTo(Parking, {
  as: "parking",
});

ParkingComment.sync().then(() => {
  console.log("ParkingComment table created");
});
module.exports = ParkingComment;
