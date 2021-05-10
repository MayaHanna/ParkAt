const PrivateParkingOffer = require("../models/ParkingOffer");
const { getMerchantIdByUser } = require("./merchants");

const getParkingOffers = async () => {
  try {
    const parkingOffers = await PrivateParkingOffer.findAll();
    return parkingOffers;
  } catch (error) {
    return error;
  }
};
const addParkingOffer = async (newParkingOffer) => {
  try {
    await PrivateParkingOffer.create({
      price: newParkingOffer.price,
      start: newParkingOffer.start,
      end: newParkingOffer.end,
      status: newParkingOffer.status,
      parkingId: newParkingOffer.parkingId,
      canBePermanent: newParkingOffer.canBePermanent,
      owner: newParkingOffer.owner,
    });
  } catch (error) {
    console.log(error);
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
