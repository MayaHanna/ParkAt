const Merchant = require("../models/Merchant");

const getMerchantByUserData = async (userMail) => {
  try {
    const merchant = await Merchant.findAll({
      where: {
        userEmailAddress: userMail,
      },
    });

    return merchantId;
  } catch (error) {
    return error;
  }
};

const addMerchantData = async (newMerchant) => {
  try {
    return await Merchant.create({
      merchantId: newMerchant.merchantId,
      userEmailAddress: newMerchant.userEmailAddress,
    });
  } catch (error) {
    return error;
  }
};

const addPointsToMerchantData = async (userMail, pointsToAdd) => {
  try {
    const user = await Merchant.findAll({
      where: {
        userEmailAddress: userMail,
      },
    });
    user.increment({ points: pointsToAdd });
  } catch (error) {
    return error;
  }
};

const editMerchantData = async (userMail, newMerchant) => {
  try {
    const updatedMerchant = await Merchant.update(
      {
        merchantId: newMerchant.merchantId,
        points: newMerchant.points,
        userEmailAddress: newMerchant.userEmailAddress,
      },
      { where: { userEmailAddress: userMail } }
    );
    return updatedMerchant;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getMerchantByUserData,
  addMerchantData,
  addPointsToMerchantData,
  editMerchantData,
};
