const PrivateParkingOffer = require("../Models/ParkingOffer");
const { getMerchantIdByUser } = require("./merchants");
const { getSlotsByParkingOfferId, addSlots } = require("./slots");

const getParkingOffers = async () => {
  try {
    const parkingOffers = await PrivateParkingOffer.findAll();
    let slots = parkingOffers.map(
      async (offer) => await getSlotsByParkingOfferId(offer.id)
    );
    slots = await Promise.all(slots);
    let result = parkingOffers.map((offer) => ({
      ...offer.dataValues,
      slots: slots.map((slotsArray) => {
        if (slotsArray[0]) {
          if (slotsArray[0].dataValues.publicParkingOfferId === offer.id) {
            const relatedSlots = slotsArray.map(slot => slot.dataValues);
            return relatedSlots;
          } else {
            return [];
          }
        } else {
          return [];
        }
      })[0],
    }));
    return result;
  } catch (error) {
    return error;
  }
};
const addParkingOffer = async (newParkingOffer) => {
  try {
    let createResult = await PrivateParkingOffer.create({
      price: newParkingOffer.price,
      start: newParkingOffer.start,
      end: newParkingOffer.end,
      status: newParkingOffer.status,
      parkingId: newParkingOffer.parkingId,
      canBePermanent: newParkingOffer.canBePermanent,
      owner: newParkingOffer.owner,
      isPrivate: newParkingOffer.isPrivate,
    });
    if (newParkingOffer.slots)
      await addSlots(newParkingOffer.slots, createResult.id);
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
