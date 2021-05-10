const {
  getParkingReports,
  addParkingReport,
} = require("../dal/parkingReports");

const getParkingReportsS = async () => {
  try {
    return getParkingReports();
  } catch (error) {
    callback(error);
  }
};

const addParkingReportS = async (newParkingReport) => {
  try {
    return addParkingReport(newParkingReport);
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getParkingReportsS,
  addParkingReportS,
};
