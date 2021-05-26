const ImagePath = require("../Models/ImagePath");

const getImagesPathsByParkingId = async (parkingId) => {
  try {
    const imagesPaths = await ImagePath.findAll({
      where: {
        parkingId: parkingId,
      },
    });
    return imagesPaths;
  } catch (error) {
    return error;
  }
};

const addImagePath = async (parkingId, imagePath) => {
  try {
    ImagePath.create({
      imagePath: imagePath,
      parkingId: parkingId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getImagesPathsByParkingId,
  addImagePath,
};
