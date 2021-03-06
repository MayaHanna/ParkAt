const Sequelize = require("sequelize");
const db = require("../database/connection");
const Parking = require("./Parking");

const ParkingRating = db.define("parking_ratings", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  rating: Sequelize.INTEGER(3),
  parkingId: Sequelize.INTEGER,
});

ParkingRating.associate = (models) => {
  // ParkingId
  ParkingRating.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
};
// // Parking_id fk
// ParkingRating.belongsTo(Parking, { as: "fk_parking" });

// ParkingRating.sync().then(() => {
//   console.log("ParkingRating table created");
// });
module.exports = ParkingRating;
