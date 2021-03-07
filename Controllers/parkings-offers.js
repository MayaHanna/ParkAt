const { getParkingsOffers: getParkingsOffersData } = require("../Models/parkings-offers");

const getParkingsOffers = async () => {
    return getParkingsOffersData();
};

const addParkingOffer = async (parkingOffer) => {
    //TODO: post to db
};

const editParkingOffer = async (parkingOfferId, restOfParkingOffer) => {
    //TODO: edit parking offer
};

module.exports = {
    getParkingsOffers,
    addParkingOffer,
    editParkingOffer
};