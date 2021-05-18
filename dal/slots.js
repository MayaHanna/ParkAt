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

const addSlots = async (slots) => {
  try {
    Slot.bulkCreate(slots);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getSlotsByParkingOfferId,
  addSlots,
  getSlots,
};
