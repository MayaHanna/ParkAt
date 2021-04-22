const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");
const User = require("./User");

const PublicParkingOffer = db.define("public_parking_offers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  start: {
    type: Sequelize.TIME,
  },
  end: {
    type: Sequelize.TIME,
  },
});

// Parking_id fk
PublicParkingOffer.belongsTo(Parking, { foreignKey: "parking_id" });

// creditor fk
PublicParkingOffer.belongsTo(User, { foreignKey: "creditor" });

PublicParkingOffer.sync().then(() => {
  console.log("PublicParkingOffers table created");
});
module.exports = PublicParkingOffer;
