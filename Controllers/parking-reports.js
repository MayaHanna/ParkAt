const { getParkingReports: getParkingReportsData } = require("../Models/parkings-offers");

const getParkingReports = async () => {
    return getParkingReportsData();
};

const addParkingReport = async (parkingReports) => {
    //TODO: post to db
};

module.exports = {
    getParkingReports,
    addParkingReport
}