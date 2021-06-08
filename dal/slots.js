const Slot = require("../Models/slot");

const getSlotsByParkingOfferId = async (parkingOfferId) => {
  try {
    const slots = await Slot.findAll({
      where: {
        publicParkingOfferId: parkingOfferId,
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
    result = await Slot.bulkCreate(newSlots);
    console.log(res);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getSlotsByParkingOfferId,
  addSlots,
  getSlots,
};
