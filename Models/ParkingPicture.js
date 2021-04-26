const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");

const ParkingPicture = db.define("parking_pictures", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  picture: Sequelize.INTEGER,
});

ParkingPicture.associate = (models) => {
  // Owner
  ParkingPicture.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
};
// // Parking_id fk
// ParkingPicture.belongsTo(Parking, {
//   // foreignKey: "parking_id",
//   // targetKey: "id",
// });

// ParkingPicture.sync().then(() => {
//   console.log("ParkingComment table created");
// });
module.exports = ParkingPicture;
