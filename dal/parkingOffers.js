const PrivateParkingOffer = require("../models/PrivateParkingOffer");
const { getMerchantIdByUser } = require("./merchants");

const getParkingOffers = async () => {
  try {
    const parkingOffers = await PrivateParkingOffer.findAll();
    return parkingOffers;
  } catch (error) {
    return error;
  }
};
const addParkingOffer = async (newParkingOffer, userEmailAddress) => {
  try {
    const merchantId = await getMerchantIdByUser(userEmailAddress);
    console.log(newParkingOffer);

    await PrivateParkingOffer.create({
      price: newParkingOffer.price,
      start: newParkingOffer.start,
      end: newParkingOffer.end,
      parkindId: newParkingOffer.parking,
      status: newParkingOffer.status,
      canBePermanent: newParkingOffer.canBePermanent,
      merchantId: merchantId[0].dataValues.merchantId,
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
