const {
  getParkingOffers,
  addParkingOffer,
  editParkingOffer,
} = require("../dal/parkingOffers");

const getParkingOffersS = async () => {
  try {
    return getParkingOffers();
  } catch (error) {
    return error;
  }
};
const addParkingOfferS = async (newParkingOffer, userEmailAddress) => {
  try {
    return addParkingOffer(addParkingOffer(newParkingOffer, userEmailAddress));
  } catch (error) {
    return error;
  }
};
const editParkingOfferS = async (parkingOfferId, newParkingOffer) => {
  try {
    return editParkingOffer(parkingOfferId, newParkingOffer);
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getParkingOffersS,
  addParkingOfferS,
  editParkingOfferS,
};
