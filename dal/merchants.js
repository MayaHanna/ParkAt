const Merchant = require("../models/merchant");

const getMerchantIdByUser = async (userEmailAddress) => {
  try {
    const merchantId = await Merchant.findAll({
      where: {
        userEmailAddress: userEmailAddress,
      },
    });
    return merchantId;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getMerchantIdByUser,
};
