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

const addImagePath = async (parkingId, image) => {
  try {
    let newImagePath = {
      imagePath: image.imagePath,
      parkingId: parkingId,
      publisher: image.publisher,
      publisherName: image.publisherName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    ImagePath.create(newImagePath);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getImagesPathsByParkingId,
  addImagePath,
};
