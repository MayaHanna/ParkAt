const Sequelize = require("sequelize");
const db = require("../config/database");

const FreeParkingReport = db.define("free_parking_reports", {
  id: {
    type: Sequelize.NUMBER,
  },
  time: {
    type: Sequelize.DATE,
  },
});

// Parking_id fk
Parking.belongsTo(Parking, { foreignKey: "parking_id", targetKey: "id" });

FreeParkingReport.sync().then(() => {
  console.log("FreeParkingReport table created");
});
module.exports = FreeParkingReport;
