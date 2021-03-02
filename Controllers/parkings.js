const {getParkings: getParkingsData} = require("../Models/parkings");

const getParkings = async () => {
  return getParkingsData();
};

module.exports.getParkings = getParkings;