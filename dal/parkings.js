const Parkings = require("../Models/Parking");

const { getCommentsByParkingId, addComment } = require("./comments");
const { getImagesPathsByParkingId, addImagePath } = require("./imagesPaths");
const Merchant = require("../Models/merchant");

const getParkingResult = (parkings, comments, imagesPaths) => {
  return parkings.map((parking) => ({
    ...parking.dataValues,
    location: { lat: parking.lat, lng: parking.lng },
    comments:
      comments.filter((parkingCommentsArray) => {
        if (parkingCommentsArray[0]) {
          if (parkingCommentsArray[0].parkingId === parking.id) {
            return parkingCommentsArray;
          }
        }
      })[0] || [],
    imagesPaths:
      imagesPaths.filter((parkingImagesPathsArray) => {
        if (parkingImagesPathsArray[0]) {
          if (parkingImagesPathsArray[0].parkingId === parking.id) {
            return parkingImagesPathsArray;
          }
        }
      })[0] || [],
  }));
};

const getParkings = async () => {
  try {
    const parkings = await Parkings.findAll();
    let comments = parkings.map(
      async (parking) => await getCommentsByParkingId(parking.id)
    );

    let imagesPaths = parkings.map(
      async (parking) => await getImagesPathsByParkingId(parking.id)
    );

    comments = await Promise.all(comments);
    imagesPaths = await Promise.all(imagesPaths);

    return getParkingResult(parkings, comments, imagesPaths);
  } catch (error) {
    return error;
  }
};

const getParkingsByOwner = async (ownerEmailAddress) => {
  try {
    const parkings = await Parkings.findAll({
      where: {
        owner: ownerEmailAddress,
      },
    });
    let comments = parkings.map(
      async (parking) => await getCommentsByParkingId(parking.id)
    );

    let imagesPaths = parkings.map(
      async (parking) => await getImagesPathsByParkingId(parking.id)
    );

    comments = await Promise.all(comments);
    imagesPaths = await Promise.all(imagesPaths);

    return getParkingResult(parkings, comments, imagesPaths);
  } catch (error) {
    callback(error);
  }
};

const addParking = async (newParking) => {
  try {
    let returnedParking = "";
    returnedParking = await Parkings.create({
      isPrivate: newParking.isPrivate,
      address: newParking.address,
      description: newParking.description,
      size: newParking.size,
      owner: newParking.owner,
      lat: newParking.location.lat,
      lng: newParking.location.lng,
    });
    return returnedParking.dataValues;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addCommentToParking = async (parkingId, comment) => {
  try {
    addComment(parkingId, comment);
  } catch (error) {
    callback(error);
  }
};

const addImageToParking = async (parkingId, imagePath) => {
  try {
    addImagePath(parkingId, imagePath);
  } catch (error) {
    callback(error);
  }
};
module.exports = {
  getParkings,
  getParkingsByOwner,
  addParking,
  addCommentToParking,
  addImageToParking,
};
