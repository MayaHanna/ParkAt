const Parkings = require("../models/Parking");

const getParkings = async () => {
  try {
    const parkings = await Parkings.findAll();
    return parkings;
  } catch (error) {
    return error;
  }
};

const getParkingsByOwner = async (ownerId) => {
  try {
    const parkings = await Parkings.findAll({
      where: {
        owner: ownerId,
      },
    });
    return parkings;
  } catch (error) {
    callback(error);
  }
};

const addParking = async (newParking) => {
  try {
    await Parkings.create({
      isPrivate: newParking.isPrivate,
      address: newParking.address,
      description: newParking.description,
      size: newParking.size,
      status: newParking.status,
      owner: newParking.owner,
    });
    return parkings;
  } catch (error) {
    callback(error);
  }
};

const addCommentToParking = async (parkingId, comment) => {
  try {
    await Parkings.update(
      {
        comments: Sequelize.fn(
          "array_append",
          Sequelize.col("comments"),
          comment
        ),
      },
      { where: { id: parkingId } }
    );
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getParkings,
  getParkingsByOwner,
  addParking,
  addCommentToParking,
};
