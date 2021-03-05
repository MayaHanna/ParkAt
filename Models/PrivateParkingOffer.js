const Sequelize = require("sequelize");
const db = require("../config/database");

const PrivateParkingOffer = db.define("private_parking_offers", {
  id: {
    type: Sequelize.NUMBER,
  },
  price: {
    type: Sequelize.NUMBER,
  },
  start: {
    type: Sequelize.TIME,
  },
  end: {
    type: Sequelize.TIME,
  },
  // need to set it up to "end"
  can_be_permanent: {
    type: Sequelize.BOOLEAN,
  },
  // need to setup fk
  parking_id: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  creditor: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  customer: {
    type: Sequelize.NUMBER,
  },
});

PrivateParkingOffer.sync().then(() => {
  console.log("PrivateParkingOffers table created");
});
module.exports = PrivateParkingOffer;
