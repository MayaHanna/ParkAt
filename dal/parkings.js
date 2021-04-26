const Parkings = require("../models/Parking");

const getParkings = async (callback) => {
  try {
    const parkings = await Parkings.findAll();
    callback(parkings);
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getParkings,
};
