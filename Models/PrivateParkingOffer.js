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
});

// Parking_id fk
Parking.belongsTo(Parking, { foreignKey: "parking_id", targetKey: "id" });

// creditor fk
Parking.belongsTo(User, { foreignKey: "creditor", targetKey: "id" });

// customer fk
Parking.belongsTo(User, { foreignKey: "customer", targetKey: "id" });

PrivateParkingOffer.sync().then(() => {
  console.log("PrivateParkingOffers table created");
});
module.exports = PrivateParkingOffer;
