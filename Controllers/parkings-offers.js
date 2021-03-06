const { getParkingsOffers: getParkingsOffersData } = require("../Models/parkings-offers");

const getParkingsOffers = async () => {
    return getParkingsOffersData();
};

const addParkingOffer = async (parkingOffer) => {
    //TODO: post to db
};

module.exports = {
    getParkingsOffers,
    addParkingOffer
}