const Sequelize = require("sequelize");
const db = require("../config/database");

const FreeParkingReport = db.define("free_parking_reports", {
  id: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  parking_id: {
    type: Sequelize.NUMBER,
  },
  time: {
    type: Sequelize.DATE,
  },
});

FreeParkingReport.sync().then(() => {
  console.log("FreeParkingReport table created");
});
module.exports = FreeParkingReport;
