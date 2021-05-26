const Slot = require("../models/Slot");

const getSlotsByParkingOfferId = async (parkingOfferId) => {
  try {
    const slots = await Slot.findAll({
      where: {
        publicParkingOffer: parkingOfferId,
      },
    });
    return slots;
  } catch (error) {
    return error;
  }
};

const getSlots = async () => {
  try {
    const slots = await Slot.findAll();
    return slots;
  } catch (error) {
    return error;
  }
};

const addSlots = async (slots, publicParkingId) => {
  try {
    let newSlots = slots.map(slot => {return {...slot, publicParkingId: publicParkingOffer}})
    Slot.bulkCreate(newSlots);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getSlotsByParkingOfferId,
  addSlots,
  getSlots,
};
