const Sequelize = require("sequelize");
const db = require("../database/connection");
const Parking = require("./Parking");

const ParkingComment = db.define("parking_comments", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  comment: Sequelize.STRING,
  parkingId: Sequelize.NUMBER,
});

ParkingComment.associate = (models) => {
  // Owner
  ParkingComment.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
};

// // Parking_id fk
// ParkingComment.belongsTo(Parking, {
//   as: "parking",
// });

// ParkingComment.sync().then(() => {
//   console.log("ParkingComment table created");
// });
module.exports = ParkingComment;
