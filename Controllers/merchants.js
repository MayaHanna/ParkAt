const { getMerchantsData } = require("../Models/merchants");

const getMerchantIdByUser = async (req) => {
  return getMerchantsData().filter(_=>_.userMailAddress == req);
};

module.exports = {
  getMerchantIdByUser,
}