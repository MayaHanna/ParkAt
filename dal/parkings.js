const Parkings = require("../models/Parking");
const { getCommentsByParkingId } = require("./comments");

const getParkings = async () => {
  try {
    const parkings = await Parkings.findAll();
    let comments = parkings.map(
      async (parking) => await getCommentsByParkingId(parking.id)
    );
    comments = await Promise.all(comments);
    let result = parkings.map((parking) => ({
      ...parking.dataValues,
      comments: comments.filter((parkingCommentsArray) => {
        if (parkingCommentsArray[0])
          if (parkingCommentsArray[0].parkingId === parking.id) {
            return { ...parkingCommentsArray };
          }
      })[0],
    }));
    return result;
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
    let comments = parkings.map(
      async (parking) => await getCommentsByParkingId(parking.id)
    );
    comments = await Promise.all(comments);
    let result = parkings.map((parking) => ({
      ...parking.dataValues,
      comments: comments.filter((parkingCommentsArray) => {
        if (parkingCommentsArray[0])
          if (parkingCommentsArray[0].parkingId === parking.id) {
            return { ...parkingCommentsArray };
          }
      })[0],
    }));
    return result;
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
      owner:
        newParking.owner.charAt(0).toUpperCase() + newParking.owner.slice(1),
      // createdAt: new Date(),
      // updatedAt: new Date(),
    });
  } catch (error) {
    console.log(error);
    return error;
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
