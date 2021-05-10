const data = [
    {
        merchantId: "FAUJDYBDLARQG",
        points: 0,
        userMailAddress: "pazreshef@gmail.com"
    }
];

const getMerchantsData = () => {
    return data;
};

const addMerchantData = (newMerchant) => {
  data.push(newMerchant);
  return newMerchant;
};

const addPointsToMerchantData = (userMail, pointsToAdd) => {
    const merchantIndex = data.findIndex(d => d.userMailAddress === userMail);
    data[merchantIndex] = {
        ...data[merchantIndex],
        points: data[merchantIndex].points + pointsToAdd
    };

    return data[merchantIndex];
};

const editMerchantData = (userMail, newMerchant) => {
    const merchantIndex = data.findIndex(d => d.userMailAddress === userMail);
    data[merchantIndex] = newMerchant;
    return newMerchant;
};

module.exports = {
    getMerchantsData,
    addMerchantData,
    addPointsToMerchantData,
    editMerchantData
};