const {
  getParkings,
  getParkingsByOwner,
  addParking,
  addCommentToParking,
  addImageToParking,
} = require("../dal/parkings");

const getParkingsS = async () => {
  try {
    return getParkings();
  } catch (error) {
    return error;
  }
};

const getParkingsByOwnerS = async (ownerEmailAddress) => {
  try {
    return getParkingsByOwner(ownerEmailAddress);
  } catch (error) {
    return error;
  }
};

const addParkingS = async (newParking) => {
  try {
    return addParking(newParking);
  } catch (error) {
    return error;
  }
};

const addCommentToParkingS = async (parkingId, comment) => {
  try {
    return addCommentToParking(parkingId, comment);
  } catch (error) {
    return error;
  }
};
const addImageToParkingS = async (parkingId, imagePath) => {
  try {
    return addImageToParkingS(parkingId, imagePath);
  } catch (error) {
    return error;
  }
};

const addImageToParkingS = async (parkingId, imageUrl) => {
  try {
    return addImageToParking(parkingId, comment);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getParkingsS,
  getParkingsByOwnerS,
  addParkingS,
  addCommentToParkingS,
  addImageToParkingS,
};
