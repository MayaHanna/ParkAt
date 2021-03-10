const Sequelize = require("sequelize");
const db = require("../config/database");

const ParkingPicture = db.define("parking_pictures", {
  id: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  parking_id: {
    type: Sequelize.NUMBER,
  },
  picture: {
    type: Sequelize.NUMBER,
  },
});

ParkingComment.sync().then(() => {
  console.log("ParkingComment table created");
});
module.exports = ParkingComment;
