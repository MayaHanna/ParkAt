const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");

const FreeParkingReport = db.define("free_parking_reports", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  time: {
    type: Sequelize.DATE,
  },
});

// Parking_id fk
FreeParkingReport.belongsTo(Parking, {
  foreignKey: "parking_id",
});

FreeParkingReport.sync().then(() => {
  console.log("FreeParkingReport table created");
});
module.exports = FreeParkingReport;
