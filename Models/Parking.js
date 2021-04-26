const Sequelize = require("sequelize");
const db = require("../database/connection");
const User = require("../Models/User");

const Parking = db.define("parkings", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  is_private: Sequelize.BOOLEAN,
  address: Sequelize.STRING,
  description: Sequelize.STRING,
  size: {
    type: Sequelize.ENUM,
    values: ["motorcycle", "small_car", "big_car", "truck", "bus"],
  },
  status: {
    type: Sequelize.ENUM,
    values: ["free", "taken", "unknown"],
  },
});

Parking.associate = (models) => {
  // Owner
  Parking.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });

  Parking.hasMany(models.ParkingRating);
  Parking.hasMany(models.ParkingComment);
  Parking.hasMany(models.ParkingPicture);
  Parking.hasMany(models.FreeParkingReport);
  Parking.hasMany(models.PublicParkingOffer);
  Parking.hasMany(models.PrivateParkingOffer);
};
// // Owner fk
// Parking.belongsTo(User, { foreignKey: "owner" });

// Parking.sync().then(() => {
//   console.log("parking table created");
// });
module.exports = Parking;
