const Sequelize = require("sequelize");
const db = require("../config/database");

const PublicParkingOffer = db.define("public_parking_offers", {
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
  // need to setup fk
  parking_id: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  creditor: {
    type: Sequelize.NUMBER,
  },
});

PublicParkingOffer.sync().then(() => {
  console.log("PublicParkingOffers table created");
});
module.exports = PublicParkingOffer;
