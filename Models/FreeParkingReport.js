const Sequelize = require("sequelize");
const db = require("../database/connection");
const Parking = require("./Parking");

const FreeParkingReport = db.define("free_parking_reports", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  time: Sequelize.DATE,
  parkingId: Sequelize.NUMBER,
});

FreeParkingReport.associate = (models) => {
  // parkingId
  FreeParkingReport.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
};

// // Parking_id fk
// FreeParkingReport.belongsTo(Parking, {
//   foreignKey: "parking_id",
// });

// FreeParkingReport.sync().then(() => {
//   console.log("FreeParkingReport table created");
// });
module.exports = FreeParkingReport;
