const {
  getParkings,
  getParkingsByOwner,
  addParking,
  addCommentToParking,
} = require("../dal/parkings");

const getParkingsS = async () => {
  try {
    return getParkings();
  } catch (error) {
    callback(error);
  }
};

const getParkingsByOwnerS = async (ownerId) => {
  try {
    return getParkingsByOwner(ownerId);
  } catch (error) {
    callback(error);
  }
};

const addParkingS = async (newParking) => {
  try {
    return addParking(newParking);
  } catch (error) {
    callback(error);
  }
};

const addCommentToParkingS = async (parkingId, comment) => {
  try {
    return addCommentToParking(parkingId, comment);
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getParkingsS,
  getParkingsByOwnerS,
  addParkingS,
  addCommentToParkingS,
};
