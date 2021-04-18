const {
  getParkings: getParkingsData,
  getParkingsByOwner: getParkingsByOwnerData,
  getParkingById: getParkingByIdData,
  updateParking
} = require("../Models/parkings");

const getParkings = async () => {
  return getParkingsData();
};

const getParkingsByOwner = async (ownerMail) => {
  return getParkingsByOwnerData(ownerMail);
};

const addParking = async (parking) => {
  //TODO: post to db
};

const addCommentToParking = async (parkingId, comment) => {
  const parking = getParkingById(parkingId);
  parking.comments.push(comment);
  return updateParking(parking);
};

module.exports = {
  getParkings,
  getParkingsByOwner,
  addParking,
  addCommentToParking
};