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
  isPrivate: Sequelize.BOOLEAN,
  address: Sequelize.STRING,
  description: Sequelize.STRING,
  size: {
    type: Sequelize.ENUM,
    values: ["Small", "Big"],
  },
  lat: Sequelize.FLOAT,
  lng: Sequelize.FLOAT,
  // status: {
  //   type: Sequelize.ENUM,
  //   values: ["free", "taken", "unknown"],
  // },
  owner: Sequelize.STRING,
});

Parking.associate = (models) => {
  // Owner
  Parking.belongsTo(models.Merchant, {
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
