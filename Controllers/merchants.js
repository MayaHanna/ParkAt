const {addPointsToMerchantData} = require("../Models/merchants");
const {editMerchantData} = require("../Models/merchants");
const {addMerchantData} = require("../Models/merchants");
const { getMerchantsData } = require("../Models/merchants");

const getMerchantIdByUser = async (req) => {
  return getMerchantsData().find(_=>_.userMailAddress == req);
};

const addMerchant = async (newMerchant) => {
  return addMerchantData(newMerchant);
};

const addPointsToMerchant = async (userMail, pointsToAdd) => {
  return addPointsToMerchantData(userMail, pointsToAdd);
}

const editMerchant = async (userMail, newMerchant) => {
  return editMerchantData(userMail, newMerchant);
};

module.exports = {
  getMerchantIdByUser,
  addMerchant,
  addPointsToMerchant,
  editMerchant
};