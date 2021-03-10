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
});

// Parking_id fk
Parking.belongsTo(Parking, { foreignKey: "parking_id", targetKey: "id" });

// creditor fk
Parking.belongsTo(User, { foreignKey: "creditor", targetKey: "id" });

PublicParkingOffer.sync().then(() => {
  console.log("PublicParkingOffers table created");
});
module.exports = PublicParkingOffer;
