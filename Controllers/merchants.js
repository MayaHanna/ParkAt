const { addPointsToMerchantData } = require("../dal/merchants");
const { editMerchantData } = require("../dal/merchants");
const { addMerchantData } = require("../dal/merchants");
const { getMerchantByUserData } = require("../dal/merchants");

const getMerchantByUser = async (userMail) => {
  return getMerchantByUserData(userMail);
};

const addMerchant = async (newMerchant) => {
  return addMerchantData(newMerchant);
};

const addPointsToMerchant = async (userMail, pointsToAdd) => {
  return addPointsToMerchantData(userMail, pointsToAdd);
};

const editMerchant = async (userMail, newMerchant) => {
  return editMerchantData(userMail, newMerchant);
};

module.exports = {
  getMerchantByUser,
  addMerchant,
  addPointsToMerchant,
  editMerchant,
};
