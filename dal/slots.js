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

const addSlots = async (slots, publicParkingOfferId) => {
  try {
    let newSlots = slots.map((slot) => {
      return { ...slot, publicParkingOfferId: publicParkingOfferId };
    });
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
