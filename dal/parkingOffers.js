const PrivateParkingOffer = require("../models/PrivateParkingOffer");

const getParkingOffers = async () => {
  try {
    const parkings = await PrivateParkingOffer.findAll();
    return parkings;
  } catch (error) {
    return error;
  }
};
const addParkingOffer = async (newParkingOffer) => {
  console.log("parkingOffer", newParkingOffer);
  try {
    await PrivateParkingOffer.create({
      price: newParkingOffer.price,
      start: newParkingOffer.start,
      end: newParkingOffer.end,
      canBePermanent: newParkingOffer.canBePermanent,
      merchantId: newParkingOffer.merchantId,
    });
  } catch (error) {
    // console.log(error);
    return error;
  }
};
const editParkingOffer = async (parkingOfferId, newParkingOffer) => {
  try {
    await PrivateParkingOffer.update(
      {
        price: newParkingOffer.price,
        start: newParkingOffer.start,
        end: newParkingOffer.end,
        canBePermanent: newParkingOffer.canBePermanent,
        merchantId: newParkingOffer.merchantId,
      },
      { where: { id: parkingOfferId } }
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getParkingOffers,
  addParkingOffer,
  editParkingOffer,
};
