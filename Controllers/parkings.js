const { getParkings: getParkingsData } = require("../Models/parkings");

const getParkings = async () => {
  return getParkingsData();
};

const getParkingsByOwner = async () => {
  return getParkingsData();
};

module.exports = {
  getParkings,
  getParkingsByOwner
}