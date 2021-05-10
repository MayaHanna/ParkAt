const Merchant = require("../models/Merchant");

const getMerchantIdByUser = async (userEmailAddress) => {
  console.log("emaill ind merchands", userEmailAddress);
  try {
    const merchantId = await Merchant.findAll({
      where: {
        userEmailAddress: userEmailAddress,
      },
      attributes: ["merchantId"],
    });

    return merchantId;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getMerchantIdByUser,
};
