const FreeParkingReport = require("../models/FreeParkingReport");

const getParkingReports = async () => {
  try {
    const parkingReports = await FreeParkingReport.findAll();
    return parkingReports;
  } catch (error) {
    return error;
  }
};
const addParkingReport = async (newParkingReport) => {
  try {
    await FreeParkingReport.create({
      time: newParkingReport.time,
      parkingId: newParkingReport.id,
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getParkingReports,
  addParkingReport,
};
