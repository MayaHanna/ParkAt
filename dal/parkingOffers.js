const PrivateParkingOffer = require("../models/ParkingOffer");
const { getMerchantIdByUser } = require("./merchants");
const { getSlotsByParkingId, addSlots } = require("./slots");

const getParkingOffers = async () => {
  try {
    const parkingOffers = await PrivateParkingOffer.findAll();
    let slots = parkingOffers.map(async (offer) => {
      if (!offer.isPrivate) await getSlotsByParkingOfferId(offer.id);
    });
    let result = parkingOffers.map((offer) => ({
      ...offer,
      slots: slots.map((slot) => {
        slot.publicParkingOffer === offer.id ? slot : {};
      }),
    }));
    return result;
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
    await addSlots(newParkingOffer.slots);
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
