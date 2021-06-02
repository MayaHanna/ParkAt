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
const addComment = async (parkingId, comment) => {
  try {
    Comment.create({
      content: comment.content,
      rating: comment.rating ? Number(comment.rating) : undefined,
      publisherName: comment.publisherName,
      parkingId: parkingId,
      publisher: comment.publisher,
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCommentsByParkingId,
  addComment,
};
