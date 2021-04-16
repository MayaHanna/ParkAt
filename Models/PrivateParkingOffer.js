const Sequelize = require("sequelize");
const db = require("../config/database");
const Parking = require("./Parking");
const User = require("./User");

const PrivateParkingOffer = db.define("private_parking_offers", {
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
  // need to set it up to "end"
  can_be_permanent: {
    type: Sequelize.BOOLEAN,
  },
});

// Parking_id fk
PrivateParkingOffer.belongsTo(Parking, {
  // foreignKey: "parking_id",
  as: "parking",
});

// creditor fk
PrivateParkingOffer.belongsTo(User, {
  foreignKey: "creditor",
});

// customer fk
PrivateParkingOffer.belongsTo(User, {
  foreignKey: "customer",
});

PrivateParkingOffer.sync().then(() => {
  console.log("PrivateParkingOffers table created");
});
module.exports = PrivateParkingOffer;
