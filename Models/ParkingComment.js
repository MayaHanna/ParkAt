const Sequelize = require("sequelize");
const db = require("../config/database");

const ParkingComment = db.define("parking_comments", {
  id: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  parking_id: {
    type: Sequelize.NUMBER,
  },
  comment: {
    type: Sequelize.STRING,
  },
});

ParkingComment.sync().then(() => {
  console.log("ParkingComment table created");
});
module.exports = ParkingComment;
