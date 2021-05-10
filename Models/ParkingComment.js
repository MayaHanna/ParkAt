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
  content: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  parkingId: Sequelize.NUMBER,
  publisherName: Sequelize.STRING,
});

ParkingComment.associate = (models) => {
  // parkingId
  ParkingComment.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
  // publisher
  ParkingComment.belongsTo(models.Merchant, {
    foreignKey: {
      allowNull: false,
    },
    targetKey: "userEmailAddress",
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
