const { getParkings: getParkingsData } = require("../Models/parkings");

const getParkings = async () => {
  return getParkingsData();
};

const getParkingsByOwner = async (req) => {
  return getParkingsData().filter(_=>_.owner == req);
};

const addParking = async (parking) => {
  //TODO: post to db
};

module.exports = {
  getParkings,
  getParkingsByOwner,
  addParking
}