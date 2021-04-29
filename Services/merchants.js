const { getMerchantIdByUser } = require("../dal/merchants");

const getMerchantIdByUserS = async (userEmailAddresss) => {
  try {
    return getMerchantIdByUser(userEmailAddresss);
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getMerchantIdByUserS,
};
