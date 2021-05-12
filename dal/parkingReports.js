const FreeParkingReport = require("../Models/FreeParkingReport");

const getParkingReports = async () => {
  try {
    const parkingReports = await FreeParkingReport.findAll();
    return parkingReports;
  } catch (error) {
    return error;
  }
};
const addParkingReport = async (newParkingReport) => {
  console.log(newParkingReport);
  try {
    await FreeParkingReport.create({
      time: newParkingReport.time,
      parkingId: newParkingReport.parkingId,
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getParkingReports,
  addParkingReport,
};
