const Comment = require("../Models/ParkingComment");

const getCommentsByParkingId = async (parkingId) => {
  try {
    const comments = await Comment.findAll({
      where: {
        parkingId: parkingId,
      },
    });
    return comments;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCommentsByParkingId,
};
