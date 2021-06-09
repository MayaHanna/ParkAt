const PrivateParkingOffer = require("../Models/ParkingOffer");
const { getMerchantIdByUser } = require("./merchants");
const { getSlotsByParkingOfferId, addSlots, updateSlots } = require("./slots");
const moment = require("moment");

const getParkingOffers = async () => {
  try {
    const parkingOffers = await PrivateParkingOffer.findAll();
    let slots = parkingOffers.map(
      async (offer) => await getSlotsByParkingOfferId(offer.id)
    );
    slots = await Promise.all(slots);
    let result = parkingOffers.map((offer) => {
      const relatedSlot = slots.find(slotsArray => slotsArray[0] &&
        slotsArray[0].dataValues.publicParkingOfferId === offer.dataValues.id);

      return {
        ...offer.dataValues,
        slots: relatedSlot ? relatedSlot.map(slot => slot.dataValues) : []
      }
    });

    return result;
  } catch (error) {
    return error;
  }
};

const addParkingOffer = async (newParkingOffer) => {

  const startDate = moment(newParkingOffer.start).format("YYYY-MM-DD HH:mm:ss.SSS");
  const endDate = moment(newParkingOffer.end).format("YYYY-MM-DD HH:mm:ss.SSS");

  try {
    let createResult = await PrivateParkingOffer.create({
      price: newParkingOffer.price,
      start: startDate,
      end: endDate,
      status: newParkingOffer.status,
      parkingId: newParkingOffer.parkingId,
      canBePermanent: newParkingOffer.canBePermanent,
      owner: newParkingOffer.owner,
      isPrivate: newParkingOffer.isPrivate,
    });
    if (newParkingOffer.slots)
      await addSlots(newParkingOffer.slots, createResult.id);

    return createResult.dataValues;
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
        status: newParkingOffer.status,
        client: newParkingOffer.client,
      },
      { where: { id: parkingOfferId } }
    );

    await updateSlots(newParkingOffer.slots);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getParkingOffers,
  addParkingOffer,
  editParkingOffer,
};
