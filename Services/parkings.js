const { getParkings } = require("../dal/parkings");

const getParkingsS = (callback) => {
  try {
    getParkings((response) => callback(response));
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getParkingsS,
};
