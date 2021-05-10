const { getMerchantIdByUser } = require("../dal/merchants");

const getMerchantIdByUserS = async (userMail) => {
  try {
    return getMerchantIdByUser(userMail);
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  getMerchantIdByUserS,
};
