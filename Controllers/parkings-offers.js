const {getParkingsOffers: getParkingsOffersData} = require("../Models/parkings-offers");

const getParkingsOffers = async () => {
    return getParkingsOffersData();
};

module.exports.getParkingsOffers = getParkingsOffers;